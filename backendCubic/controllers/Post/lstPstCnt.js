import { lstPst } from "../../services/Post/lstPstSrv.js";

export const lstPstCnt = async (req, res) => {
  try {
    const docTypes = await lstPst();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
