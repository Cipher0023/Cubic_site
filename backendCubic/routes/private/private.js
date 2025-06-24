import express from "express";

//imports developers
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
import { delRolCnt } from "../../controllers/Role/delRolCnt.js";

//imports Users
import { regUsrCnt } from "../../controllers/User/regUsrCnt.js";
import { fndUsrCnt } from "../../controllers/User/fndUsrCnt.js";
import { lstUsrCnt } from "../../controllers/User/lstUsrCnt.js";
import { updUsrCnt } from "../../controllers/User/updUsrCnt.js";
import { delUsrCnt } from "../../controllers/User/delUsrCnt.js";

//imports ProdCat
import { regPrcCnt } from "../../controllers/ProdCat/regPrcCnt.js";
import { fndPrcCnt } from "../../controllers/ProdCat/fndPrcCnt.js";
import { lstPrcCnt } from "../../controllers/ProdCat/lstPrcCnt.js";
import { updPrcCnt } from "../../controllers/ProdCat/updPrcCnt.js";
import { delPrcCnt } from "../../controllers/ProdCat/delPrcCnt.js";

//imports ServCat
import { regSvcCnt } from "../../controllers/ServCat/regSvcCnt.js";
import { fndSvcCnt } from "../../controllers/ServCat/fndSvcCnt.js";
import { lstSvcCnt } from "../../controllers/ServCat/lstSvcCnt.js";
import { updSvcCnt } from "../../controllers/ServCat/updSvcCnt.js";
import { delSvcCnt } from "../../controllers/ServCat/delSvcCnt.js";

//imports Photos
import { regPhtCnt } from "../../controllers/Photos/regPhtCnt.js";
import { fndPhtCnt } from "../../controllers/Photos/fndPhtCnt.js";
import { lstPhtCnt } from "../../controllers/Photos/lstPhtCnt.js";
import { updPhtCnt } from "../../controllers/Photos/updPhtCnt.js";
import { delPhtCnt } from "../../controllers/Photos/delPhtCnt.js";

//imports Photos
//import { regPstCnt } from "../../controllers/Post/regPstCnt.js";
//import { fndPstCnt } from "../../controllers/Post/fndPstCnt.js";
//import { lstPstCnt } from "../../controllers/Post/lstPstCnt.js";
//import { updPstCnt } from "../../controllers/Post/updPstCnt.js";
//import { delPstCnt } from "../../controllers/Post/delPstCnt.js";

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
router.delete("/delRol", delRolCnt);

//user actions
router.post("/regUsr", regUsrCnt);
router.get("/fndUsr", fndUsrCnt);
router.get("/lstUsr", lstUsrCnt);
router.put("/updUsr", updUsrCnt);
router.delete("/delUsr", delUsrCnt);

//product categories actions
router.post("/regPrc", regPrcCnt);
router.get("/fndPrc", fndPrcCnt);
router.get("/lstPrc", lstPrcCnt);
router.put("/updPrc", updPrcCnt);
router.delete("/delPrc", delPrcCnt);

//service categories actions
router.post("/regSvc", regSvcCnt);
router.get("/fndSvc", fndSvcCnt);
router.get("/lstSvc", lstSvcCnt);
router.put("/updSvc", updSvcCnt);
router.delete("/delSvc", delSvcCnt);

//photo actions
router.post("/regPht", regPhtCnt);
router.get("/fndPht", fndPhtCnt);
router.get("/lstPht", lstPhtCnt);
router.put("/updPht", updPhtCnt);
router.delete("/delPht", delPhtCnt);

//post actions
//router.post("/regPst", regPstCnt);
//router.get("/fndPst", fndPstCnt);
//router.get("/lstPst", lstPstCnt);
//router.put("/updPst", updPstCnt);
//router.delete("/delPst", delPstCnt);

export default router;
