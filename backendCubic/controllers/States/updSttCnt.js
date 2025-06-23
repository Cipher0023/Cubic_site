import { fndStt } from "../../services/States/fndSttSrv.js";
import { updStt } from "../../services/States/updSttSrv.js";

//

export const updSttCnt = async (req, res) => {
  const { state_id, updateData } = req.body;
  try {
    if (!state_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndStt(state_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      state_id: existing.state_id,
      ...updateData,
    };
    const result = await updStt(existing.state_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
