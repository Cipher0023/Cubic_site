import { delCpg } from "../../services/Campaign/delCpgSrv.js";
import { fndCpg } from "../../services/Campaign/fndCpgSrv.js";

export const delCpgCnt = async (req, res) => {
  const { campaign_id } = req.body;
  try {
    if (!campaign_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndCpg(campaign_id);
    if (!existing) {
      return res.status(404).json({ message: "Campaign não encontrade." });
    }
    const result = await delCpg(campaign_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
