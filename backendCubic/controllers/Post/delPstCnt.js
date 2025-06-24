import { delPst } from "../../services/Post/delPstSrv.js";

export const delPstCnt = async (req, res) => {
  const { post_id } = req.body;
  try {
    if (!post_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delPst(post_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
