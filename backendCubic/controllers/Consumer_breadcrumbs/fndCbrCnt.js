import { fndCbr } from "../../services/Consumer_breadcrumbs/fndCbrSrv.js";

export const fndCbrCnt = async (req, res) => {
  try {
    const { breadcrumb_id } = req.query;
    if (!breadcrumb_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndCbr(breadcrumb_id);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Consumer_breadcrumbs não encontrade." });
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
