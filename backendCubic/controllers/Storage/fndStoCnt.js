import { fndSto } from "../../services/Storage/fndStoSrv.js";

export const fndStoCnt = async (req, res) => {
  try {
    const { storage_id } = req.query;
    if (!storage_id) {
      return res.status(400).json({ message: "Insira dados" });
    }
    const result = await fndSto(storage_id);
    if (!result) {
      return res.status(404).json({ message: "Storage não encontrade." });
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
