import { lstScp } from "../../services/Shopping_cart_product/lstScpSrv.js";

export const lstScpCnt = async (req, res) => {
  try {
    const Shopping_cart_product = await lstScp();
    return res.status(200).json(Shopping_cart_product);
  } catch (error) {
    console.error("Erro ao listar Shopping_cart_product");
  }
};
