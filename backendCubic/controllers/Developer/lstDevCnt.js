import { lstDev } from "../../services/Developer/lstDevSrv.js";

export const lstDevCnt = async (req, res) => {
  try {
    const response = await lstDev();
    return res.status(200).json(response);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
