import { fndSvd } from "../../services/Service_viewed/fndSvdSrv.js";

export const fndSvdCnt = async (req, res) => {
  try {
    const { service_viewed_id } = req.query;
    if (!service_viewed_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndSvd(service_viewed_id);
    if (!result) {
      return res
        .status(404)
        .json({ message: "Service_viewed não encontrade." });
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
