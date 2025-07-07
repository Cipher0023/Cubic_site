import { fndPrc } from "../../services/Product_categories/fndPrcSrv.js";
import { updPrc } from "../../services/Product_categories/updPrcSrv.js";

//

export const updPrcCnt = async (req, res) => {
  const { product_category_id, updateData } = req.body;
  try {
    if (!product_category_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndPrc(product_category_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      product_category_id: existing.product_category_id,
      ...updateData,
    };
    const result = await updPrc(existing.product_category_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
