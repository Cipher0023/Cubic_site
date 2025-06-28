import { fndCsm } from "../../services/Consumer/fndCsmSrv.js";
import { updCsm } from "../../services/Consumer/updCsmSrv.js";

export const updCsmCnt = async (req, res) => {
  const { consumer_id, updateData } = req.body;
  try {
    if (!consumer_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndCsm(consumer_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      consumer_id: existing.consumer_id,
      ...updateData,
    };
    const result = await updCsm(existing.consumer_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
