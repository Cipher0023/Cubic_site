import { loginDev } from "../../services/Developer/logDevSrv.js";

export const logDevCnt = async (req, res) => {
  try {
    // Chama o serviço de deleção de developer
    const result = await loginDev(req, res);
    return result;
  } catch (error) {
    console.error("Erro no controller ao logar developer:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
