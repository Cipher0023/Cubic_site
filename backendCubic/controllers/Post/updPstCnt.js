import { fndPst } from "../../services/Post/fndPstSrv.js";
import { updPst } from "../../services/Post/updPstSrv.js";

//

export const updPstCnt = async (req, res) => {
  const { post_id, updateData } = req.body;
  try {
    if (!post_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndPst(post_id);
    if (!existing) {
      return res.status(404).json({ message: "Não encontrado." });
    }
    req.body = {
      post_id: existing.post_id,
      ...updateData,
    };
    const result = await updPst(existing.post_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
