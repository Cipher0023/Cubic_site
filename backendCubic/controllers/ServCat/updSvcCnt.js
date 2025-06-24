import { fndSvc } from "../../services/ServCat/fndSvcSrv.js";
import { updSvc } from "../../services/ServCat/updSvcSrv.js";

//

export const updSvcCnt = async (req, res) => {
  const { service_category_id, updateData } = req.body;
  try {
    if (!service_category_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndSvc(service_category_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      service_category_id: existing.service_category_id,
      ...updateData,
    };
    const result = await updSvc(existing.service_category_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
