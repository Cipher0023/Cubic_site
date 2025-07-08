import { fndSho } from "../../services/Shopping_cart/fndShoSrv.js";
import { updSho } from "../../services/Shopping_cart/updShoSrv.js";

export const updShoCnt = async (req, res) => {
  const { shopping_cart_id, updateData } = req.body;
  try {
    if (!shopping_cart_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndSho(shopping_cart_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: " Shopping_cart Não encontrade." });
    }
    req.body = {
      shopping_cart_id: existing.shopping_cart_id,
      ...updateData,
    };
    const result = await updSho(shopping_cart_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
