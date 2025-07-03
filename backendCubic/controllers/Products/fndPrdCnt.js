import { fndPrd } from "../../services/Products/fndPrdSrv.js";

export const fndPrdCnt = async (req, res) => {
  try {
    const { product_id } = req.query;
    if (!product_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndPrd(product_id);
    if (!result) {
      return res.status(404).json({ message: "Products não encontrade." });
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
