import { lstCsm } from "../../services/Consumer/lstCsmSrv.js";

export const lstCsmCnt = async (req, res) => {
  try {
    const docTypes = await lstCsm();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no contCsmler ao listar");
  }
};
