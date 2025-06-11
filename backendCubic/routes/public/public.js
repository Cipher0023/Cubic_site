import express from "express";
import { registerUser } from "../../controllers/registerController.js";
import { loginUser } from "../../controllers/loginController.js";
import { registerDeveloper } from "../../controllers/Developer/developerRegister.js";
import { updateDeveloper } from "../../controllers/Developer/updateDeveloper.js";
import { findDeveloper } from "../../controllers/Developer/findDeveloper.js";

const router = express.Router();

//parte de ações de usuário
router.post("/cadastro", registerUser);
router.post("/login", loginUser);
//parte de ações de developer
router.post("/cadastro-developer", registerDeveloper);
router.post("/achar-developer", findDeveloper);
router.put("/atualizar-developer", updateDeveloper);

export default router;
