import { lstSvd } from "../../services/Service_viewed/lstSvdSrv.js";

export const lstSvdCnt = async (req, res) => {
  try {
    const Service_viewed = await lstSvd();
    return res.status(200).json(Service_viewed);
  } catch (error) {
    console.error("Erro ao listar Service_viewed");
  }
};
