import { delSto } from "../../services/Storage/delStoSrv.js";
import { fndSto } from "../../services/Storage/fndStoSrv.js";

export const delStoCnt = async (req, res) => {
  const { storage_id } = req.body;
  try {
    if (!storage_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndSto(storage_id);
    if (!existing) {
      return res.status(404).json({ message: "Storage não encontrade." });
    }
    const result = await delSto(storage_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
