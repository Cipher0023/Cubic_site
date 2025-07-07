import { lstPsa } from "../../services/Product_sales/lstPsaSrv.js";

export const lstPsaCnt = async (req, res) => {
  try {
    const Product_sales = await lstPsa();
    return res.status(200).json(Product_sales);
  } catch (error) {
    console.error("Erro ao listar Product_sales");
  }
};
