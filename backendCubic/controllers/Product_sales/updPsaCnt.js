import { fndPsa } from "../../services/Product_sales/fndPsaSrv.js";
import { updPsa } from "../../services/Product_sales/updPsaSrv.js";

export const updPsaCnt = async (req, res) => {
  const { product_sales_id, updateData } = req.body;
  try {
    if (!product_sales_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndPsa(product_sales_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: " Product_sales Não encontrade." });
    }
    req.body = {
      product_sales_id: existing.product_sales_id,
      ...updateData,
    };
    const result = await updPsa(product_sales_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
