import express from "express";
import { logDevCnt } from "../../controllers/Developer/logDevCnt.js";
import { regDevCnt } from "../../controllers/Developer/regDevCnt.js";

const router = express.Router();

//parte de ações de developer
router.post("/logDev", logDevCnt);
router.post("/regDev", regDevCnt);

export default router;
