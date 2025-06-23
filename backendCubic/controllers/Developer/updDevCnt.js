import { findDev } from "../../services/Developer/fndDevSrv.js";
import { updateDeveloper } from "../../services/Developer/updDevSrv.js";

export const updDevCnt = async (req, res) => {
  const { currentEmail, updateData } = req.body;
  // ou req.params, depende da rota

  try {
    if (!currentEmail) {
      return res.status(400).json({ message: "Email obrigatório." });
    }

    const existingDeveloper = await findDev(currentEmail);
    if (!existingDeveloper) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado." });
    }

    req.body = { dev_id: existingDeveloper.dev_id, ...updateData };
    const result = await updateDeveloper(existingDeveloper.dev_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error(
      "Erro no controller ao fazer update do developer:",
      error.message
    );
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
