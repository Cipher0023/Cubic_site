import { delPrc } from "../../services/ProdCat/delPrcSrv.js";

export const delPrcCnt = async (req, res) => {
  const { product_category_id } = req.body;
  try {
    if (!product_category_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delPrc(product_category_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
