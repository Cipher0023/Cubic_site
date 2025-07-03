import { lstCpg } from "../../services/Campaign/lstCpgSrv.js";

export const lstCpgCnt = async (req, res) => {
  try {
    const Campaign = await lstCpg();
    return res.status(200).json(Campaign);
  } catch (error) {
    console.error("Erro ao listar Campaign");
  }
};
