import { delPrd } from "../../services/Products/delPrdSrv.js";
import { fndPrd } from "../../services/Products/fndPrdSrv.js";

export const delPrdCnt = async (req, res) => {
  const { product_id } = req.body;
  try {
    if (!product_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndPrd(product_id);
    if (!existing) {
      return res.status(404).json({ message: "Product não encontrade." });
    }
    const result = await delPrd(product_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
