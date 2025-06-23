import express from "express";
import { fndDevCnt } from "../../controllers/Developer/fndDevCnt.js";
import { delDevCnt } from "../../controllers/Developer/delDevCnt.js";
import { updDevCnt } from "../../controllers/Developer/updDevCnt.js";

import { fndDctCnt } from "../../controllers/DocType/fndDctCnt.js";
import { regDctCnt } from "../../controllers/DocType/regDctCnt.js";
import { updDctCnt } from "../../controllers/DocType/updDctCnt.js";
import { delDctCnt } from "../../controllers/DocType/delDctCnt.js";
import { lstDctCnt } from "../../controllers/DocType/lstDctCnt.js";

import { regPgsCnt } from "../../controllers/Pages/regPgsCnt.js";
import { fndPgsCnt } from "../../controllers/Pages/fndPgsCnt.js";
import { lstPgsCnt } from "../../controllers/Pages/lstPgsCnt.js";
import { updPgsCnt } from "../../controllers/Pages/updPgsCnt.js";
import { delPgsCnt } from "../../controllers/Pages/delPgsCnt.js";

import { regPmtCnt } from "../../controllers/PaymentMethods/regPmtCnt.js";

const router = express.Router();

//developer actions
router.get("/fndDev", fndDevCnt);
router.delete("/delDev", delDevCnt);
router.put("/updDev", updDevCnt);

//doctype actions
router.post("/regDct", regDctCnt);
router.get("/fndDct", fndDctCnt);
router.get("/lstDct", lstDctCnt);
router.put("/updDct", updDctCnt);
router.delete("/delDct", delDctCnt);

//pages actions
router.post("/regPgs", regPgsCnt);
router.get("/fndPgs", fndPgsCnt);
router.get("/lstPgs", lstPgsCnt);
router.put("/updPgs", updPgsCnt);
router.delete("/delPgs", delPgsCnt);

//payment_methods actions
router.post("/regPmt", regPmtCnt);
//router.get("/fndPmt", fndPmtCnt);
//router.get("/lstPmt", lstPmtCnt);
//router.put("/updPmt", updPmtCnt);
//router.delete("/delPmt", delPmtCnt);

export default router;
