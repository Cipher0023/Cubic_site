import dotenv from "dotenv";
import { regDct } from "../../services/DocType/regDctSrv.js";

dotenv.config();

export const regDctCnt = async (req, res) => {
  try {
    const { name, dev_id, description } = req.body;
    //validação dos campos obrigatórios
    if (!name || !dev_id || !description) {
      return res
        .status(400)
        .json({ message: "Preencha todos os campos obrigatórios" });
    }
    // Create new DocType
    const newDoctype = await regDct(name, dev_id, description);
    return res.status(201).json(newDoctype);
  } catch (err) {
    console.error("erro ao registrar tipo de documento", err.message);
    return res.status(500).json({ message: err.message });
  }
};
