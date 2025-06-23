import { delStt } from "../../services/States/delSttSrv.js";

export const delSttCnt = async (req, res) => {
  const { state_id } = req.body;
  try {
    if (!state_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delStt(state_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
