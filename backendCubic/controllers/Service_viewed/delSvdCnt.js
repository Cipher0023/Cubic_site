import { delSvd } from "../../services/Service_viewed/delSvdSrv.js";
import { fndSvd } from "../../services/Service_viewed/fndSvdSrv.js";

export const delSvdCnt = async (req, res) => {
  const { service_viewed_id } = req.body;
  try {
    if (!service_viewed_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndSvd(service_viewed_id);
    if (!existing) {
      return res
        .status(404)
        .json({ message: "Service_viewed não encontrade." });
    }
    const result = await delSvd(service_viewed_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
