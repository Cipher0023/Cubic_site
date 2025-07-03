import { fndPrd } from "../../services/Products/fndPrdSrv.js";
import { updPrd } from "../../services/Products/updPrdSrv.js";

export const updPrdCnt = async (req, res) => {
  const { product_id, updateData } = req.body;
  try {
    if (!product_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndPrd(product_id);
    if (!existing) {
      return res.status(404).json({ message: " Product Não encontrade." });
    }
    req.body = {
      product_id: existing.product_id,
      ...updateData,
    };
    const result = await updPrd(product_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
