import { fndSco } from "../../services/Service_comments/fndScoSrv.js";
import { updSco } from "../../services/Service_comments/updScoSrv.js";

export const updScoCnt = async (req, res) => {
  const { service_comment_id, updateData } = req.body;
  try {
    if (!service_comment_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndSco(service_comment_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: " Service_comments Não encontrade." });
    }
    req.body = {
      service_comment_id: existing.service_comment_id,
      ...updateData,
    };
    const result = await updSco(service_comment_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
