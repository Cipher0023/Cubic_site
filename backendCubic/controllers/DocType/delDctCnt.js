import { fndDct } from "../../services/DocType/fndDctSrv.js";
import { delDct } from "../../services/DocType/delDctSrv.js";

export const delDctCnt = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ message: "o nome é obrigatório." });
    }
    const existingDocType = await fndDct(name);
    if (!existingDocType) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado." });
    }
    req.body = {
      document_type_id: existingDocType.document_type_id,
    };
    const result = await delDct(existingDocType.document_type_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error(
      "Erro no controller ao fazer o delete do Doctype:",
      error.message
    );
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
