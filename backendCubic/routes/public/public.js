import express from "express";

//dev
import { logDevCnt } from "../../controllers/Developer/logDevCnt.js";
import { regDevCnt } from "../../controllers/Developer/regDevCnt.js";

//User
import { logUsrCnt } from "../../controllers/User/logUsrCnt.js";

//App states
import { fndSttCnt } from "../../controllers/States/fndSttCnt.js";
import { lstSttCnt } from "../../controllers/States/lstSttCnt.js";

//Product_categories
import { fndPrcCnt } from "../../controllers/Product_categories/fndPrcCnt.js";
import { lstPrcCnt } from "../../controllers/Product_categories/lstPrcCnt.js";

//Product
import { fndPrdCnt } from "../../controllers/Products/fndPrdCnt.js";
import { lstPrdCnt } from "../../controllers/Products/lstPrdCnt.js";

//Service_categories
import { fndSvcCnt } from "../../controllers/ServCat/fndSvcCnt.js";
import { lstSvcCnt } from "../../controllers/ServCat/lstSvcCnt.js";

//Services
import { fndSerCnt } from "../../controllers/Services/fndSerCnt.js";
import { lstSerCnt } from "../../controllers/Services/lstSerCnt.js";

//Photos
import { fndPhtCnt } from "../../controllers/Photos/fndPhtCnt.js";
import { lstPhtCnt } from "../../controllers/Photos/lstPhtCnt.js";

//Posts
import { fndPstCnt } from "../../controllers/Post/fndPstCnt.js";
import { lstPstCnt } from "../../controllers/Post/lstPstCnt.js";

//Consumer
import { regCsmCnt } from "../../controllers/Consumer/regCsmCnt.js";
//login consumer

//Camaign
import { fndCpgCnt } from "../../controllers/Campaign/fndCpgCnt.js";
import { lstCpgCnt } from "../../controllers/Campaign/lstCpgCnt.js";

//Service comments
import { fndScoCnt } from "../../controllers/Service_comments/fndScoCnt.js";
import { lstScoCnt } from "../../controllers/Service_comments/lstScoCnt.js";

//Product comments
import { fndPcoCnt } from "../../controllers/Product_comments/fndPcoCnt.js";
import { lstPcoCnt } from "../../controllers/Product_comments/lstPcoCnt.js";

//Appointments
import { fndApoCnt } from "../../controllers/Appointments/fndApoCnt.js";
import { lstApoCnt } from "../../controllers/Appointments/lstApoCnt.js";

const router = express.Router();

//parte de ações de developer
router.post("/logDev", logDevCnt);
router.post("/regDev", regDevCnt);

//app states
router.get("/lstStt", lstSttCnt);
router.get("/fndStt", fndSttCnt);

//user
router.post("/logUsr", logUsrCnt);

//product Categories
router.get("/fndPrc", fndPrcCnt);
router.get("/lstPrc", lstPrcCnt);

//Products
router.get("/fndPrd", fndPrdCnt);
router.get("/lstPrd", lstPrdCnt);

//service_categories
router.get("/fndSvc", fndSvcCnt);
router.get("/lstSvc", lstSvcCnt);

//photo
router.get("/fndPht", fndPhtCnt);
router.get("/lstPht", lstPhtCnt);

//post
router.get("/fndPst", fndPstCnt);
router.get("/lstPst", lstPstCnt);

//Consumer
router.post("/regCsm", regCsmCnt);
// Consumer login

//Campaign
router.get("/fndCpg", fndCpgCnt);
router.get("/lstCpg", lstCpgCnt);

//service
router.get("/fndSer", fndSerCnt);
router.get("/lstSer", lstSerCnt);

//service_comments
router.get("/fndSco", fndScoCnt);
router.get("/lstSco", lstScoCnt);

//product_comments
router.get("/fndPco", fndPcoCnt);
router.get("/lstPco", lstPcoCnt);

//Appointments
router.get("/fndApo", fndApoCnt);
router.get("/lstApo", lstApoCnt);

export default router;
