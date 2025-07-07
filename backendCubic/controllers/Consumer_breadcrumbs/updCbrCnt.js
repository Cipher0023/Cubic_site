import { fndCbr } from "../../services/Consumer_breadcrumbs/fndCbrSrv.js";
import { updCbr } from "../../services/Consumer_breadcrumbs/updCbrSrv.js";

export const updCbrCnt = async (req, res) => {
  const { breadcrumb_id, updateData } = req.body;
  try {
    if (!breadcrumb_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndCbr(breadcrumb_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: " Consumer_breadcrumbs Não encontrade." });
    }
    req.body = {
      breadcrumb_id: existing.breadcrumb_id,
      ...updateData,
    };
    const result = await updCbr(breadcrumb_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
