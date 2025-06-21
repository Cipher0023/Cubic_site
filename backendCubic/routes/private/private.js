import express from "express";
import { fndDevCnt } from "../../controllers/Developer/fndDevCnt.js";
import { delDevCnt } from "../../controllers/Developer/delDevCnt.js";
import { updDevCnt } from "../../controllers/Developer/updDevCnt.js";

const router = express.Router();

//developer actions
router.get("/fndDev", fndDevCnt);
router.delete("/delDev", delDevCnt);
router.put("/updDev", updDevCnt);

export default router;
