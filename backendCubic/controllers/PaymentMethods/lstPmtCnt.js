import { lstPmt } from "../../services/PaymentMethods/lstPmtSrv.js";

export const lstPmtCnt = async (req, res) => {
  try {
    const docTypes = await lstPmt();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
