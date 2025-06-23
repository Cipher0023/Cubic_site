import { fndPmt } from "../../services/PaymentMethods/fndPmtSrv.js";
import { updPmt } from "../../services/PaymentMethods/updPmtSrv.js";

//

export const updPmtCnt = async (req, res) => {
  const { payment_method_id, updateData } = req.body;
  try {
    if (!payment_method_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndPmt(payment_method_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      payment_method_id: existing.payment_method_id,
      ...updateData,
    };
    const result = await updPmt(existing.payment_method_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
