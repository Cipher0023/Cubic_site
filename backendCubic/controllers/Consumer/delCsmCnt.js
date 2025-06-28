import { delCsm } from "../../services/Consumer/delCsmSrv.js";

export const delCsmCnt = async (req, res) => {
  const { consumer_id } = req.body;
  try {
    if (!consumer_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delCsm(consumer_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
