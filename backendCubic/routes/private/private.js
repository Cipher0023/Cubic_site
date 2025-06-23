import express from "express";
import { fndDevCnt } from "../../controllers/Developer/fndDevCnt.js";
import { lstDevCnt } from "../../controllers/Developer/lstDevCnt.js";
import { delDevCnt } from "../../controllers/Developer/delDevCnt.js";
import { updDevCnt } from "../../controllers/Developer/updDevCnt.js";
//imports doctype
import { fndDctCnt } from "../../controllers/DocType/fndDctCnt.js";
import { regDctCnt } from "../../controllers/DocType/regDctCnt.js";
import { updDctCnt } from "../../controllers/DocType/updDctCnt.js";
import { delDctCnt } from "../../controllers/DocType/delDctCnt.js";
import { lstDctCnt } from "../../controllers/DocType/lstDctCnt.js";
//imports pages
import { regPgsCnt } from "../../controllers/Pages/regPgsCnt.js";
import { fndPgsCnt } from "../../controllers/Pages/fndPgsCnt.js";
import { lstPgsCnt } from "../../controllers/Pages/lstPgsCnt.js";
import { updPgsCnt } from "../../controllers/Pages/updPgsCnt.js";
import { delPgsCnt } from "../../controllers/Pages/delPgsCnt.js";
//imports payment methods
import { regPmtCnt } from "../../controllers/PaymentMethods/regPmtCnt.js";
import { fndPmtCnt } from "../../controllers/PaymentMethods/fndPmtCnt.js";
import { lstPmtCnt } from "../../controllers/PaymentMethods/lstPmtCnt.js";
import { delPmtCnt } from "../../controllers/PaymentMethods/delPmtCnt.js";
import { updPmtCnt } from "../../controllers/PaymentMethods/updPmtCnt.js";
//imports states
import { regSttCnt } from "../../controllers/States/regSttCnt.js";
import { fndSttCnt } from "../../controllers/States/fndSttCnt.js";
import { lstSttCnt } from "../../controllers/States/lstSttCnt.js";
import { delSttCnt } from "../../controllers/States/delSttCnt.js";
import { updSttCnt } from "../../controllers/States/updSttCnt.js";
//imports roles
import { regRolCnt } from "../../controllers/Role/regRolCnt.js";
import { fndRolCnt } from "../../controllers/Role/fndRolCnt.js";
import { lstRolCnt } from "../../controllers/Role/lstRolCnt.js";
import { updRolCnt } from "../../controllers/Role/updRolCnt.js";
//import { delRolCnt } from "../../controllers/Role/delRolCnt.js";

const router = express.Router();

//developer actions
router.get("/fndDev", fndDevCnt);
router.get("/lstDev", lstDevCnt);
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
router.get("/fndPmt", fndPmtCnt);
router.get("/lstPmt", lstPmtCnt);
router.put("/updPmt", updPmtCnt);
router.delete("/delPmt", delPmtCnt);

//state actions
router.post("/regStt", regSttCnt);
router.get("/fndStt", fndSttCnt);
router.get("/lstStt", lstSttCnt);
router.put("/updStt", updSttCnt);
router.delete("/delStt", delSttCnt);

//role actions
router.post("/regRol", regRolCnt);
router.get("/fndRol", fndRolCnt);
router.get("/lstRol", lstRolCnt);
router.put("/updRol", updRolCnt);
//router.delete("/delRol", delRolCnt);

export default router;
