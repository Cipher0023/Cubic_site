import { delScp } from "../../services/Shopping_cart_product/delScpSrv.js";
import { fndScp } from "../../services/Shopping_cart_product/fndScpSrv.js";

export const delScpCnt = async (req, res) => {
  const { shopping_cart_product_id } = req.body;
  try {
    if (!shopping_cart_product_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndScp(shopping_cart_product_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: "Shopping_cart_product não encontrade." });
    }
    const result = await delScp(shopping_cart_product_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
