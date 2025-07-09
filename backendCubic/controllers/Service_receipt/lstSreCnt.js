import { lstSre } from "../../services/Service_receipt/lstSreSrv.js";

export const lstSreCnt = async (req, res) => {
  try {
    const Service_receipt = await lstSre();
    return res.status(200).json(Service_receipt);
  } catch (error) {
    console.error("Erro ao listar Service_receipt");
  }
};
