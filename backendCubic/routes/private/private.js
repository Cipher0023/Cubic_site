import express from "express";

import { registerDeveloper } from "../../controllers/Developer/developerRegister.js";
import { updateDeveloper } from "../../controllers/Developer/updateDeveloper.js";
import { findDeveloper } from "../../controllers/Developer/findDeveloper.js";
import { deleteDeveloper } from "../../controllers/Developer/deleteDeveloper.js";
import { registerDocType } from "../../controllers/DocType/registerDocumentType.js";

const router = express.Router();

//developer actions
router.post("/achar-developer", findDeveloper);
router.put("/atualizar-developer", updateDeveloper);
router.delete("/deletar-developer", deleteDeveloper);

//document type actions
router.post("/registerDocType", registerDocType);

export default router;
