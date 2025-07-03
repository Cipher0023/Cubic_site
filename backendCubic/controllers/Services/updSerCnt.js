import { fndSer } from "../../services/Services/fndSerSrv.js";
import { updSer } from "../../services/Services/updSerSrv.js";

export const updSerCnt = async (req, res) => {
  const { service_id, updateData } = req.body;
  try {
    if (!service_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndSer(service_id);
    if (!existing) {
      return res.status(404).json({ message: " Service Não encontrade." });
    }
    req.body = {
      service_id: existing.service_id,
      ...updateData,
    };
    const result = await updSer(service_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
