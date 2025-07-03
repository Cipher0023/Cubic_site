import { fndPco } from "../../services/Product_comments/fndPcoSrv.js";

export const fndPcoCnt = async (req, res) => {
  try {
    const { product_comments_id } = req.query;
    if (!product_comments_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndPco(product_comments_id);
    if (!result) {
      return res.status(404).json({ message: "Product_comments não encontrade." });
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
