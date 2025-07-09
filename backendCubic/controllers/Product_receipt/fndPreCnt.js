import { fndPre } from "../../services/Product_receipt/fndPreSrv.js";

export const fndPreCnt = async (req, res) => {
  try {
    const { product_receipt_id } = req.query;
    if (!product_receipt_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndPre(product_receipt_id);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Product_receipt não encontrade." });
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
