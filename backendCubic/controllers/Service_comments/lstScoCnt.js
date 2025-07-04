import { lstSco } from "../../services/Service_comments/lstScoSrv.js";

export const lstScoCnt = async (req, res) => {
  try {
    const Service_comments = await lstSco();
    return res.status(200).json(Service_comments);
  } catch (error) {
    console.error("Erro ao listar Service_comments");
  }
};
