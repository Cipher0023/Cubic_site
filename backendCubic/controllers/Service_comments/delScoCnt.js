import { delSco } from "../../services/Service_comments/delScoSrv.js";
import { fndSco } from "../../services/Service_comments/fndScoSrv.js";

export const delScoCnt = async (req, res) => {
  const { service_comment_id } = req.body;
  try {
    if (!service_comment_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndSco(service_comment_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: "service_comment não encontrade." });
    }
    const result = await delSco(service_comment_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
