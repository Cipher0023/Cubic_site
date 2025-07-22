import { loginUser } from "../../services/User/logUsrSrv.js";

export const logUsrCnt = async (req, res) => {
  try {
    // Chama o serviço de deleção de developer
    const result = await loginUser(req, res);
    return result;
  } catch (error) {
    console.error("Erro no controller ao logar User:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
