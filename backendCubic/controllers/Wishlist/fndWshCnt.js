import { fndWsh } from "../../services/Wishlist/fndWshSrv.js";

export const fndWshCnt = async (req, res) => {
  try {
    const { wishlist_id } = req.query;
    if (!wishlist_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndWsh(wishlist_id);
    if (!result) {
      return res.status(404).json({ message: "wishlist não encontrade." });
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
