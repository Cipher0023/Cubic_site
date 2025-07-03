import { fndCpg } from "../../services/Campaign/fndCpgSrv.js";

export const fndCpgCnt = async (req, res) => {
  try {
    const { campaign_id } = req.query;
    if (!campaign_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndCpg(campaign_id);
    if (!result) {
      return res.status(404).json({ message: "Campaign não encontrade." });
    }

    return res.status(200).json({
      message: "Encontrado.",
      result,
    });
  } catch (error) {
    console.error("Erro de busca:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
