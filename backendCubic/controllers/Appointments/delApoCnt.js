import { delApo } from "../../services/Appointments/delApoSrv.js";
import { fndApo } from "../../services/Appointments/fndApoSrv.js";

export const delApoCnt = async (req, res) => {
  const { appointment_id } = req.body;
  try {
    if (!appointment_id) {
      return res.status(400).json({ message: "id obrigatório" });
    }
    const existing = fndApo(appointment_id);
    if (!existing) {
      return res.status(404).json({ message: "Appointment não encontrade." });
    }
    const result = await delApo(appointment_id);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
