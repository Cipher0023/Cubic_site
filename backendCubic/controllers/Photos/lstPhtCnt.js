import { lstPht } from "../../services/Photos/lstPhtSrv.js";

export const lstPhtCnt = async (req, res) => {
  try {
    const docTypes = await lstPht();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
