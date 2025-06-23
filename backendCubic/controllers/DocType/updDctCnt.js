import { fndDct } from "../../services/DocType/fndDctSrv.js";
import { updDct } from "../../services/DocType/updDctSrv.js";

//

export const updDctCnt = async (req, res) => {
  const { currentName, updateData } = req.body;
  try {
    if (!currentName) {
      return res.status(400).json({ message: "Nome obrigatório." });
    }
    const existingDocType = await fndDct(currentName);
    if (!existingDocType) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado." });
    }
    req.body = {
      document_type_id: existingDocType.document_type_id,
      ...updateData,
    };
    const result = await updDct(existingDocType.document_type_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro no controller ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
