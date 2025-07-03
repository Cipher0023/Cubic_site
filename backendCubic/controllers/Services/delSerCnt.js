import { delSer } from "../../services/Services/delSerSrv.js";
import { fndSer } from "../../services/Services/fndSerSrv.js";

export const delSerCnt = async (req, res) => {
  const { service_id } = req.body;
  try {
    if (!service_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndSer(service_id);
    if (!existing) {
      return res.status(404).json({ message: "Product não encontrade." });
    }
    const result = await delSer(service_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
