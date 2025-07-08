import { fndApo } from "../../services/Appointments/fndApoSrv.js";
import { updApo } from "../../services/Appointments/updApoSrv.js";

export const updApoCnt = async (req, res) => {
  const { appointment_id, updateData } = req.body;
  try {
    if (!appointment_id) {
      return res.status(400).json({ message: "Id obrigatório." });
    }
    const existing = await fndApo(appointment_id);
    if (!existing) {
      return res.status(404).json({ message: " Appointments Não encontrade." });
    }
    req.body = {
      appointment_id: existing.appointment_id,
      ...updateData,
    };
    const result = await updApo(appointment_id, updateData);
    return res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao fazer update:", error.message);
    return res.status(500).json({ message: "Erro interno do servidor." });
  }
};
