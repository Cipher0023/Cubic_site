import { lstApo } from "../../services/Appointments/lstApoSrv.js";

export const lstApoCnt = async (req, res) => {
  try {
    const Appointments = await lstApo();
    return res.status(200).json(Appointments);
  } catch (error) {
    console.error("Erro ao listar Appointments");
  }
};
