import { delPvd } from "../../services/Product_viewed/delPvdSrv.js";
import { fndPvd } from "../../services/Product_viewed/fndPvdSrv.js";

export const delPvdCnt = async (req, res) => {
  const { product_viewed_id } = req.body;
  try {
    if (!product_viewed_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndPvd(product_viewed_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: "Product_viewed não encontrade." });
    }
    const result = await delPvd(product_viewed_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
