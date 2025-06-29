import { fndPgs } from "../../services/Pages/fndPgsSrv.js";

export const fndPgsCnt = async (req, res) => {
  try {
    const { page_id } = req.query;
    if (!page_id) {
      return res.status(400).json({ message: "Nome é obrigatório." });
    }
    const result = await fndPgs(page_id);
    if (!result) {
      return res.status(404).json({ message: "Não encontrada." });
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
//aaaa
