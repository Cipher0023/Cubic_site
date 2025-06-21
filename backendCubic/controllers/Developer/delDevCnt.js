import { findDev } from "../../services/Developer/fndDevSrv.js";
import { deleteDeveloper } from "../../services/Developer/delDevSrv.js";

export const delDevCnt = async (req, res) => {
  const { email } = req.body; // ou req.params, depende da rota

  try {
    if (!email) {
      return res.status(400).json({ message: "Email obrigatório." });
    }

    const existingDeveloper = await findDev(email);
    if (!existingDeveloper) {
      return res.status(404).json({ message: "Desenvolvedor não encontrado." });
    }

    const result = await deleteDeveloper(email);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro no controller ao deletar developer:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
