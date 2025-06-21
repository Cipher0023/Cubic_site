import { registerDev } from "../../services/Developer/regDevSrv.js";

export const regDevCnt = async (req, res) => {
  try {
    // Chama o serviço de deleção de developer
    const result = await registerDev(req, res);
    return result;
  } catch (error) {
    console.error("Erro no controller ao registrar developer:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
