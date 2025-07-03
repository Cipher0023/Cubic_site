import { fndPco } from "../../services/Product_comments/fndPcoSrv.js";
import { updPco } from "../../services/Product_comments/updPcoSrv.js";

export const updPcoCnt = async (req, res) => {
  const { product_comments_id, updateData } = req.body;
  try {
    if (!product_comments_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndPco(product_comments_id);
    if (!existing) {
      return res.status(404).json({ message: " Product_comments Não encontrade." });
    }
    req.body = {
      product_comments_id: existing.product_comments_id,
      ...updateData,
    };
    const result = await updPco(product_comments_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
