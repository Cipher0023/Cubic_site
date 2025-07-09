import { fndSre } from "../../services/Service_receipt/fndSreSrv.js";

export const fndSreCnt = async (req, res) => {
  try {
    const { appointment_receipt_id } = req.query;
    if (!appointment_receipt_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndSre(appointment_receipt_id);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Service_receipt não encontrade." });
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
