import { delPht } from "../../services/Photos/delPhtSrv.js";

export const delPhtCnt = async (req, res) => {
  const { photo_id } = req.body;
  try {
    if (!photo_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delPht(photo_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
