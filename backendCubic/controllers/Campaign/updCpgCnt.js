import { fndCpg } from "../../services/Campaign/fndCpgSrv.js";
import { updCpg } from "../../services/Campaign/updCpgSrv.js";

export const updCpgCnt = async (req, res) => {
  const { campaign_id, updateData } = req.body;
  try {
    if (!campaign_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndCpg(campaign_id);
    if (!existing) {
      return res.status(404).json({ message: " Campaign Não encontrade." });
    }
    req.body = {
      campaign_id: existing.campaign_id,
      ...updateData,
    };
    const result = await updCpg(campaign_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
