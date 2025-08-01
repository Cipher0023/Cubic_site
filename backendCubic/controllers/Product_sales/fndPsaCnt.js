import { fndPsa } from "../../services/Product_sales/fndPsaSrv.js";

export const fndPsaCnt = async (req, res) => {
  try {
    const { product_sales_id } = req.query;
    if (!product_sales_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndPsa(product_sales_id);
    if (!result) {
      return res.status(404).json({ message: "Product_sales não encontrade." });
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
