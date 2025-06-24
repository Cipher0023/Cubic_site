import { delSvc } from "../../services/ServCat/delSvcSrv.js";

export const delSvcCnt = async (req, res) => {
  const { service_category_id } = req.body;
  try {
    if (!service_category_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const result = await delSvc(service_category_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
