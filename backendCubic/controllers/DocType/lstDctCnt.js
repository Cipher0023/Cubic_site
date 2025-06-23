import { lstDct } from "../../services/DocType/lstDctSrv.js";

export const lstDctCnt = async (req, res) => {
  try {
    const docTypes = await lstDct();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar DocTypes");
  }
};
