import { lstPco } from "../../services/Product_comments/lstPcoSrv.js";

export const lstPcoCnt = async (req, res) => {
  try {
    const Product_comments = await lstPco();
    return res.status(200).json(Product_comments);
  } catch (error) {
    console.error("Erro ao listar Product_comments");
  }
};
