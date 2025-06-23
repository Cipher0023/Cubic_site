import { delPmt } from "../../services/PaymentMethods/delPmtSrv.js";

export const delPmtCnt = async (req, res) => {
  const { payment_method_id } = req.body;
  try {
    if (!payment_method_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delPmt(payment_method_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
