import { lstStt } from "../../services/States/lstSttSrv.js";

export const lstSttCnt = async (req, res) => {
  try {
    const docTypes = await lstStt();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
