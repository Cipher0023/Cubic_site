import { fndSvc } from "../../services/ServCat/fndSvcSrv.js";

export const fndSvcCnt = async (req, res) => {
  try {
    const { service_category_id } = req.query;
    if (!service_category_id) {
      return res.status(400).json({ message: "Id é obrigatório." });
    }
    const result = await fndSvc(service_category_id);
    if (!result) {
      return res.status(404).json({ message: "Não encontrada." });
    }

    return res.status(200).json({
      message: "Encontrado.",
      result,
    });
  } catch (error) {
    console.error("Erro de busca:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
