import { delPco } from "../../services/Product_comments/delPcoSrv.js";
import { fndPco } from "../../services/Product_comments/fndPcoSrv.js";

export const delPcoCnt = async (req, res) => {
  const { product_comments_id } = req.body;
  try {
    if (!product_comments_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndPco(product_comments_id);
    if (!existing) {
      return res.status(404).json({ message: "Product_comments não encontrade." });
    }
    const result = await delPco(product_comments_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
