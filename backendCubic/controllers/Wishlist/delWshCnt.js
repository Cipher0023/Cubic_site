import { delWsh } from "../../services/Wishlist/delWshSrv.js";
import { fndWsh } from "../../services/Wishlist/fndWshSrv.js";

export const delWshCnt = async (req, res) => {
  const { wishlist_id } = req.body;
  try {
    if (!wishlist_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndWsh(wishlist_id);
    if (!existing) {
      return res.status(404).json({ message: "Wishlist não encontrade." });
    }
    const result = await delWsh(wishlist_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
