import { fndSho } from "../../services/Shopping_cart/fndShoSrv.js";

export const fndShoCnt = async (req, res) => {
  try {
    const { shopping_cart_id } = req.query;
    if (!shopping_cart_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndSho(shopping_cart_id);
    if (!result) {
      return res.status(404).json({ message: "Shopping_cart não encontrade." });
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
