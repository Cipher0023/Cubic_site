import { fndDct } from "../../services/DocType/fndDctSrv.js";

export const fndDctCnt = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res
        .status(400)
        .json({ message: "Nome do docType é obrigatório." });
    }
    const docType = await fndDct(name);

    return res.status(200).json({
      message: "DocType encontrado.",
      docType,
    });
  } catch (error) {
    console.error("Erro no controller ao procurar developer:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
