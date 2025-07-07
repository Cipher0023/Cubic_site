import { lstPrc } from "../../services/Product_categories/lstPrcSrv.js";

export const lstPrcCnt = async (req, res) => {
  try {
    const docTypes = await lstPrc();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
