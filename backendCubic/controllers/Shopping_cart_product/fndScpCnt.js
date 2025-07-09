import { fndScp } from "../../services/Shopping_cart_product/fndScpSrv.js";

export const fndScpCnt = async (req, res) => {
  try {
    const { shopping_cart_product_id } = req.query;
    if (!shopping_cart_product_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndScp(shopping_cart_product_id);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Shopping_cart_product não encontrade." });
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
