import { fndSto } from "../../services/Storage/fndStoSrv.js";
import { updSto } from "../../services/Storage/updStoSrv.js";

export const updStoCnt = async (req, res) => {
  const { storage_id, updateData } = req.body;
  try {
    if (!storage_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndSto(storage_id);
    if (!existing) {
      return res.status(404).json({ message: " Storage Não encontrade." });
    }
    req.body = {
      storage_id: existing.storage_id,
      ...updateData,
    };
    const result = await updSto(storage_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
