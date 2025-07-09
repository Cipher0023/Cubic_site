import { delSre } from "../../services/Service_receipt/delSreSrv.js";
import { fndSre } from "../../services/Service_receipt/fndSreSrv.js";

export const delSreCnt = async (req, res) => {
  const { appointment_receipt_id } = req.body;
  try {
    if (!appointment_receipt_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndSre(appointment_receipt_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: "Service_receipt não encontrade." });
    }
    const result = await delSre(appointment_receipt_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
