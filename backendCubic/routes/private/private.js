import express from "express";
import { fndDevCnt } from "../../controllers/Developer/fndDevCnt.js";

const router = express.Router();

//developer actions
router.get("/fndDev", fndDevCnt);

export default router;
