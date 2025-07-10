import { lstSto } from "../../services/Storage/lstStoSrv.js";

export const lstStoCnt = async (req, res) => {
  try {
    const Storage = await lstSto();
    return res.status(200).json(Storage);
  } catch (error) {
    console.error("Erro ao listar Storage");
  }
};
