import { lstSho } from "../../services/Shopping_cart/lstShoSrv.js";

export const lstShoCnt = async (req, res) => {
  try {
    const Shopping_cart = await lstSho();
    return res.status(200).json(Shopping_cart);
  } catch (error) {
    console.error("Erro ao listar Shopping_cart");
  }
};
