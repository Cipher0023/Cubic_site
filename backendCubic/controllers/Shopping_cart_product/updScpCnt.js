import { fndScp } from "../../services/Shopping_cart_product/fndScpSrv.js";
import { updScp } from "../../services/Shopping_cart_product/updScpSrv.js";

export const updScpCnt = async (req, res) => {
  const { shopping_cart_product_id, updateData } = req.body;
  try {
    if (!shopping_cart_product_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndScp(shopping_cart_product_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: " Shopping_cart_product Não encontrade." });
    }
    req.body = {
      shopping_cart_product_id: existing.shopping_cart_product_id,
      ...updateData,
    };
    const result = await updScp(shopping_cart_product_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
