import { deleteDeveloper } from "../../services/Developer/delDevSrv";

export const deleteDevController = async (req, res) => {
  try {
    // Chama o serviço de deleção de developer
    const result = await deleteDeveloper(req, res);
    return result;
  } catch (error) {
    console.error("Erro no controller ao deletar developer:", error);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
