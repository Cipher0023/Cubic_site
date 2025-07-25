import jwt from "jsonwebtoken";
import { fndUsr } from "./fndUsrSrv.js";

export const chkUsr = async (token) => {
  const JWT_SECRET = process.env.JWT_SECRET;
  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, JWT_SECRET);
    // Busca o usuário pelo ID decodificado
    const user = await fndUsr(decoded.id);
    return user;
  } catch (err) {
    return null;
  }
};
