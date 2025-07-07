import { delPsa } from "../../services/Product_sales/delPsaSrv.js";
import { fndPsa } from "../../services/Product_sales/fndPsaSrv.js";

export const delPsaCnt = async (req, res) => {
  const { product_sales_id } = req.body;
  try {
    if (!product_sales_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndPsa(product_sales_id);
    if (!existing) {
      return res.status(404).json({ message: "Product_sales não encontrade." });
    }
    const result = await delPsa(product_sales_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
