import { fndPmt } from "../../services/PaymentMethods/fndPmtSrv.js";

export const fndPmtCnt = async (req, res) => {
  try {
    const { payment_method_id } = req.query;
    if (!payment_method_id) {
      return res.status(400).json({ message: "Id é obrigatório." });
    }
    const result = await fndPmt(payment_method_id);
    if (!result) {
      return res.status(404).json({ message: "Não encontrada." });
    }

    return res.status(200).json({
      message: "Encontrado.",
      result,
    });
  } catch (error) {
    console.error("Erro de busca:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
