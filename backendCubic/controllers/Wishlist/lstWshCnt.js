import { lstWsh } from "../../services/Wishlist/lstWshSrv.js";

export const lstWshCnt = async (req, res) => {
  try {
    const Wishlist = await lstWsh();
    return res.status(200).json(Wishlist);
  } catch (error) {
    console.error("Erro ao listar Wishlist");
  }
};
