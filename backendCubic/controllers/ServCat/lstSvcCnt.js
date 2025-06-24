import { lstSvc } from "../../services/ServCat/lstSvcSrv.js";

export const lstSvcCnt = async (req, res) => {
  try {
    const docTypes = await lstSvc();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
