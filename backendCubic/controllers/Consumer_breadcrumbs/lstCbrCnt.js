import { lstCbr } from "../../services/Consumer_breadcrumbs/lstCbrSrv.js";

export const lstCbrCnt = async (req, res) => {
  try {
    const Consumer_breadcrumbs = await lstCbr();
    return res.status(200).json(Consumer_breadcrumbs);
  } catch (error) {
    console.error("Erro ao listar Consumer_breadcrumbs");
  }
};
