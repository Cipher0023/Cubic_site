import { fndPst } from "../../services/Post/fndPstSrv.js";

export const fndPstCnt = async (req, res) => {
  try {
    const { post_id } = req.query;
    if (!post_id) {
      return res.status(400).json({ message: "Id é obrigatório." });
    }
    const result = await fndPst(post_id);
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
