import { delCbr } from "../../services/Consumer_breadcrumbs/delCbrSrv.js";
import { fndCbr } from "../../services/Consumer_breadcrumbs/fndCbrSrv.js";

export const delCbrCnt = async (req, res) => {
  const { breadcrumb_id } = req.body;
  try {
    if (!breadcrumb_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndCbr(breadcrumb_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: "Consumer_breadcrumb não encontrade." });
    }
    const result = await delCbr(breadcrumb_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
