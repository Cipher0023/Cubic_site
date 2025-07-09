import { lstPre } from "../../services/Product_receipt/lstPreSrv.js";

export const lstPreCnt = async (req, res) => {
  try {
    const Product_receipt = await lstPre();
    return res.status(200).json(Product_receipt);
  } catch (error) {
    console.error("Erro ao listar Product_receipt");
  }
};
