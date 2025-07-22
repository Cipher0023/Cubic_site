import { loginConsumer } from "../../services/Consumer/logCsmSrv.js";

export const logCsmCnt = async (req, res) => {
  try {
    // Chama o serviço de deleção de developer
    const result = await loginConsumer(req, res);
    return result;
  } catch (error) {
    console.error("Erro no controller ao logar Consumer:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
