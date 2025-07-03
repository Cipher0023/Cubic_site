import { fndSer } from "../../services/Services/fndSerSrv.js";

export const fndSerCnt = async (req, res) => {
  try {
    const { service_id } = req.query;
    if (!service_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndSer(service_id);
    if (!result) {
      return res.status(404).json({ message: "Services não encontrade." });
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
