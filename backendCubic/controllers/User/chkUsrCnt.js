import { chkUsr } from "../../services/User/chkUsrSrv.js";

// Controller para checar usuário via cookie
const chkUsrCnt = async (req, res) => {
  try {
    // Supondo que o cookie de autenticação se chama 'token'
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Token não encontrado" });
    }
    const user = await chkUsr(token);
    if (!user) {
      return res
        .status(401)
        .json({ error: "Usuário não encontrado ou token inválido" });
    }
    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default chkUsrCnt;
