import { fndSco } from "../../services/Service_comments/fndScoSrv.js";

export const fndScoCnt = async (req, res) => {
  try {
    const { service_comment_id } = req.query;
    if (!service_comment_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndSco(service_comment_id);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Service_comments não encontrade." });
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
