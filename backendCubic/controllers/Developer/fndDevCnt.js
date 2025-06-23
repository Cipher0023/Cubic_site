import { fndDev } from "../../services/Developer/fndDevSrv.js";

export const fndDevCnt = async (req, res) => {
  try {
    const { dev_id } = req.query;

    const developer = await fndDev(dev_id);

    if (!developer) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado." });
    }

    return res.status(200).json({
      message: "Desenvolvedor encontrado.",
      developer,
    });
  } catch (error) {
    console.error("Erro no controller ao procurar developer:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
