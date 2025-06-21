import { findDev } from "../../services/Developer/fndDevSrv.js";

export const fndDevCnt = async (req, res) => {
  try {
    const { email } = req.query;

    const developer = await findDev(email);

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
