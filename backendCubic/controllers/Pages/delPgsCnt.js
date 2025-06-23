import { delPgs } from "../../services/Pages/delPgsSrv.js";

export const delPgsCnt = async (req, res) => {
  const { page_id } = req.body;
  try {
    if (!page_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delPgs(page_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
