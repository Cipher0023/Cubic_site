import { lstPgs } from "../../services/Pages/lstPgsSrv.js";

export const lstPgsCnt = async (req, res) => {
  try {
    const docTypes = await lstPgs();
    return res.status(200).json(docTypes);
  } catch (error) {
    console.error("Erro no controller ao listar");
  }
};
