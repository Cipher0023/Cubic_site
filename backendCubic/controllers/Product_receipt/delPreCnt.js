import { delPre } from "../../services/Product_receipt/delPreSrv.js";
import { fndPre } from "../../services/Product_receipt/fndPreSrv.js";

export const delPreCnt = async (req, res) => {
  const { product_receipt_id } = req.body;
  try {
    if (!product_receipt_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndPre(product_receipt_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: "Product_receipt não encontrade." });
    }
    const result = await delPre(product_receipt_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
