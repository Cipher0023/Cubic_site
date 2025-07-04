import { fndWsh } from "../../services/Wishlist/fndWshSrv.js";
import { updWsh } from "../../services/Wishlist/updWshSrv.js";

export const updWshCnt = async (req, res) => {
  const { wishlist_id, updateData } = req.body;
  try {
    if (!wishlist_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndWsh(wishlist_id);
    if (!existing) {
      return res.status(404).json({ message: " Wishlist Não encontrade." });
    }
    req.body = {
      wishlist_id: existing.wishlist_id,
      ...updateData,
    };
    const result = await updWsh(wishlist_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
