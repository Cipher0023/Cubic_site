import { lstSer } from "../../services/Services/lstSerSrv.js";

export const lstSerCnt = async (req, res) => {
  try {
    const Service = await lstSer();
    return res.status(200).json(Service);
  } catch (error) {
    console.error("Erro ao listar Services");
  }
};
