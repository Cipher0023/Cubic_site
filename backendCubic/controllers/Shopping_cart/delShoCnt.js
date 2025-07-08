import { delSho } from "../../services/Shopping_cart/delShoSrv.js";
import { fndSho } from "../../services/Shopping_cart/fndShoSrv.js";

export const delShoCnt = async (req, res) => {
  const { shopping_cart_id } = req.body;
  try {
    if (!shopping_cart_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndSho(shopping_cart_id);
    if (!existing) {
      return res.status(404).json({ message: "Shopping_cart não encontrade." });
    }
    const result = await delSho(shopping_cart_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
