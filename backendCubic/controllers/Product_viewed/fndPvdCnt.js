import { fndPvd } from "../../services/Product_viewed/fndPvdSrv.js";

export const fndPvdCnt = async (req, res) => {
  try {
    const { product_viewed_id } = req.query;
    if (!product_viewed_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndPvd(product_viewed_id);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Product_viewed não encontrade." });
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
