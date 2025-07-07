import { lstPvd } from "../../services/Product_viewed/lstPvdSrv.js";

export const lstPvdCnt = async (req, res) => {
  try {
    const Product_viewed = await lstPvd();
    return res.status(200).json(Product_viewed);
  } catch (error) {
    console.error("Erro ao listar Product_viewed");
  }
};
