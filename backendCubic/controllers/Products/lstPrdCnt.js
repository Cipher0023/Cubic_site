import { lstPrd } from "../../services/Products/lstPrdSrv.js";

export const lstPrdCnt = async (req, res) => {
  try {
    const Product = await lstPrd();
    return res.status(200).json(Product);
  } catch (error) {
    console.error("Erro ao listar Products");
  }
};
