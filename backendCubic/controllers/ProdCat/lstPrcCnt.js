import { lstPrc } from "../../services/ProdCat/lstPrcSrv.js";

export const lstPrcCnt = async (req, res) => {
  try {
    const docTypes = await lstPrc();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
