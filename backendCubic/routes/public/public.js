import express from "express";
import { registerDeveloper } from "../../controllers/Developer/developerRegister.js";
import { loginDev } from "../../controllers/Developer/loginDeveloper.js";

const router = express.Router();

//parte de ações de developer
router.post("login-developer", loginDev);
router.post("/cadastro-developer", registerDeveloper);

export default router;
