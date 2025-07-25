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
import { delSttCnt } from "../../controllers/States/delSttCnt.js";
import { updSttCnt } from "../../controllers/States/updSttCnt.js";

//imports roles
import { regRolCnt } from "../../controllers/Role/regRolCnt.js";
import { fndRolCnt } from "../../controllers/Role/fndRolCnt.js";
import { lstRolCnt } from "../../controllers/Role/lstRolCnt.js";
import { updRolCnt } from "../../controllers/Role/updRolCnt.js";
import { delRolCnt } from "../../controllers/Role/delRolCnt.js";

//imports User
import { regUsrCnt } from "../../controllers/User/regUsrCnt.js";
import { fndUsrCnt } from "../../controllers/User/fndUsrCnt.js";
import { lstUsrCnt } from "../../controllers/User/lstUsrCnt.js";
import { updUsrCnt } from "../../controllers/User/updUsrCnt.js";
import { delUsrCnt } from "../../controllers/User/delUsrCnt.js";
import chkUsrCnt from "../../controllers/User/chkUsrCnt.js";

//imports ProdCat
import { regPrcCnt } from "../../controllers/Product_categories/regPrcCnt.js";
import { updPrcCnt } from "../../controllers/Product_categories/updPrcCnt.js";
import { delPrcCnt } from "../../controllers/Product_categories/delPrcCnt.js";

//imports Service_categories
import { regSvcCnt } from "../../controllers/ServCat/regSvcCnt.js";
import { updSvcCnt } from "../../controllers/ServCat/updSvcCnt.js";
import { delSvcCnt } from "../../controllers/ServCat/delSvcCnt.js";

//imports Photos
import { regPhtCnt } from "../../controllers/Photos/regPhtCnt.js";
import { updPhtCnt } from "../../controllers/Photos/updPhtCnt.js";
import { delPhtCnt } from "../../controllers/Photos/delPhtCnt.js";

//imports Post
import { regPstCnt } from "../../controllers/Post/regPstCnt.js";
import { updPstCnt } from "../../controllers/Post/updPstCnt.js";
import { delPstCnt } from "../../controllers/Post/delPstCnt.js";

//imports Consumer
import { fndCsmCnt } from "../../controllers/Consumer/fndCsmCnt.js";
import { lstCsmCnt } from "../../controllers/Consumer/lstCsmCnt.js";
import { updCsmCnt } from "../../controllers/Consumer/updCsmCnt.js";
import { delCsmCnt } from "../../controllers/Consumer/delCsmCnt.js";

//imports Campaign
import { regCpgCnt } from "../../controllers/Campaign/regCpgCnt.js";
import { updCpgCnt } from "../../controllers/Campaign/updCpgCnt.js";
import { delCpgCnt } from "../../controllers/Campaign/delCpgCnt.js";

//imports Products
import { regPrdCnt } from "../../controllers/Products/regPrdCnt.js";
import { updPrdCnt } from "../../controllers/Products/updPrdCnt.js";
import { delPrdCnt } from "../../controllers/Products/delPrdCnt.js";
import { fndPrdCnt } from "../../controllers/Products/fndPrdCnt.js";
import { lstPrdCnt } from "../../controllers/Products/lstPrdCnt.js";

//imports Services
import { regSerCnt } from "../../controllers/Services/regSerCnt.js";
import { updSerCnt } from "../../controllers/Services/updSerCnt.js";
import { delSerCnt } from "../../controllers/Services/delSerCnt.js";

//imports Service_comments
import { regScoCnt } from "../../controllers/Service_comments/regScoCnt.js";
import { updScoCnt } from "../../controllers/Service_comments/updScoCnt.js";
import { delScoCnt } from "../../controllers/Service_comments/delScoCnt.js";

//imports Product_comments
import { regPcoCnt } from "../../controllers/Product_comments/regPcoCnt.js";
import { updPcoCnt } from "../../controllers/Product_comments/updPcoCnt.js";
import { delPcoCnt } from "../../controllers/Product_comments/delPcoCnt.js";

//imports Wishlist
import { regWshCnt } from "../../controllers/Wishlist/regWshCnt.js";
import { fndWshCnt } from "../../controllers/Wishlist/fndWshCnt.js";
import { lstWshCnt } from "../../controllers/Wishlist/lstWshCnt.js";
import { updWshCnt } from "../../controllers/Wishlist/updWshCnt.js";
import { delWshCnt } from "../../controllers/Wishlist/delWshCnt.js";

//imports Product_sales
import { regPsaCnt } from "../../controllers/Product_sales/regPsaCnt.js";
import { fndPsaCnt } from "../../controllers/Product_sales/fndPsaCnt.js";
import { lstPsaCnt } from "../../controllers/Product_sales/lstPsaCnt.js";
import { updPsaCnt } from "../../controllers/Product_sales/updPsaCnt.js";
import { delPsaCnt } from "../../controllers/Product_sales/delPsaCnt.js";

//imports Consumer_breadcrumbs
import { regCbrCnt } from "../../controllers/Consumer_breadcrumbs/regCbrCnt.js";
import { fndCbrCnt } from "../../controllers/Consumer_breadcrumbs/fndCbrCnt.js";
import { lstCbrCnt } from "../../controllers/Consumer_breadcrumbs/lstCbrCnt.js";
import { updCbrCnt } from "../../controllers/Consumer_breadcrumbs/updCbrCnt.js";
import { delCbrCnt } from "../../controllers/Consumer_breadcrumbs/delCbrCnt.js";

//imports Service_viewed
import { regSvdCnt } from "../../controllers/Service_viewed/regSvdCnt.js";
import { fndSvdCnt } from "../../controllers/Service_viewed/fndSvdCnt.js";
import { lstSvdCnt } from "../../controllers/Service_viewed/lstSvdCnt.js";
import { delSvdCnt } from "../../controllers/Service_viewed/delSvdCnt.js";

//imports Product_viewed
import { regPvdCnt } from "../../controllers/Product_viewed/regPvdCnt.js";
import { fndPvdCnt } from "../../controllers/Product_viewed/fndPvdCnt.js";
import { lstPvdCnt } from "../../controllers/Product_viewed/lstPvdCnt.js";
import { delPvdCnt } from "../../controllers/Product_viewed/delPvdCnt.js";

//imports Shopping_cart
import { regShoCnt } from "../../controllers/Shopping_cart/regShoCnt.js";
import { fndShoCnt } from "../../controllers/Shopping_cart/fndShoCnt.js";
import { lstShoCnt } from "../../controllers/Shopping_cart/lstShoCnt.js";
import { updShoCnt } from "../../controllers/Shopping_cart/updShoCnt.js";
import { delShoCnt } from "../../controllers/Shopping_cart/delShoCnt.js";

//imports Appointments
import { regApoCnt } from "../../controllers/Appointments/regApoCnt.js";
import { updApoCnt } from "../../controllers/Appointments/updApoCnt.js";
import { delApoCnt } from "../../controllers/Appointments/delApoCnt.js";

//imports Product_receipt
import { regPreCnt } from "../../controllers/Product_receipt/regPreCnt.js";
import { fndPreCnt } from "../../controllers/Product_receipt/fndPreCnt.js";
import { lstPreCnt } from "../../controllers/Product_receipt/lstPreCnt.js";
import { delPreCnt } from "../../controllers/Product_receipt/delPreCnt.js";

//imports Service_receipt
import { regSreCnt } from "../../controllers/Service_receipt/regSreCnt.js";
import { fndSreCnt } from "../../controllers/Service_receipt/fndSreCnt.js";
import { lstSreCnt } from "../../controllers/Service_receipt/lstSreCnt.js";
import { delSreCnt } from "../../controllers/Service_receipt/delSreCnt.js";

//imports Shopping_cart_product
import { regScpCnt } from "../../controllers/Shopping_cart_product/regScpCnt.js";
import { fndScpCnt } from "../../controllers/Shopping_cart_product/fndScpCnt.js";
import { lstScpCnt } from "../../controllers/Shopping_cart_product/lstScpCnt.js";
import { updScpCnt } from "../../controllers/Shopping_cart_product/updScpCnt.js";
import { delScpCnt } from "../../controllers/Shopping_cart_product/delScpCnt.js";

//imports Strorage
import { regStoCnt } from "../../controllers/Storage/regStoCnt.js";
import { fndStoCnt } from "../../controllers/Storage/fndStoCnt.js";
import { lstStoCnt } from "../../controllers/Storage/lstStoCnt.js";
import { updStoCnt } from "../../controllers/Storage/updStoCnt.js";
import { delStoCnt } from "../../controllers/Storage/delStoCnt.js";

//imports Example
//import { regExmCnt } from "../../controllers/Example/regExmCnt.js";
//import { fndExmCnt } from "../../controllers/Example/fndExmCnt.js";
//import { lstExmCnt } from "../../controllers/Example/lstExmCnt.js";
//import { updExmCnt } from "../../controllers/Example/updExmCnt.js";
//import { delExmCnt } from "../../controllers/Example/delExmCnt.js";

const router = express.Router();

//developer actions
router.get("/fndDev", fndDevCnt);
router.get("/lstDev", lstDevCnt);
router.delete("/delDev", delDevCnt);
router.put("/updDev", updDevCnt);

//doctype actions
router.post("/regDct", regDctCnt);
router.get("/fndDct", fndDctCnt);
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
router.get("/chkUsr", chkUsrCnt);

//product categories actions
router.post("/regPrc", regPrcCnt);
router.put("/updPrc", updPrcCnt);
router.delete("/delPrc", delPrcCnt);

//service categories actions
router.post("/regSvc", regSvcCnt);
router.put("/updSvc", updSvcCnt);
router.delete("/delSvc", delSvcCnt);

//photo actions
router.post("/regPht", regPhtCnt);
router.put("/updPht", updPhtCnt);
router.delete("/delPht", delPhtCnt);

//post actions
router.post("/regPst", regPstCnt);
router.put("/updPst", updPstCnt);
router.delete("/delPst", delPstCnt);

//consumer actions
router.get("/fndCsm", fndCsmCnt);
router.get("/lstCsm", lstCsmCnt);
router.put("/updCsm", updCsmCnt);
router.delete("/delCsm", delCsmCnt);

//Campaign actions
router.post("/regCpg", regCpgCnt);
router.put("/updCpg", updCpgCnt);
router.delete("/delCpg", delCpgCnt);

//Products actions
router.post("/regPrd", regPrdCnt);
router.put("/updPrd", updPrdCnt);
router.delete("/delPrd", delPrdCnt);
router.get("/fndPrd", fndPrdCnt);
router.get("/lstPrd", lstPrdCnt);

//Services actions
router.post("/regSer", regSerCnt);
router.put("/updSer", updSerCnt);
router.delete("/delSer", delSerCnt);

//Service_comments actions
router.post("/regSco", regScoCnt);
router.put("/updSco", updScoCnt);
router.delete("/delSco", delScoCnt);

//Product_comments actions
router.post("/regPco", regPcoCnt);
router.put("/updPco", updPcoCnt);
router.delete("/delPco", delPcoCnt);

//Wishlist actions
router.post("/regWsh", regWshCnt);
router.get("/fndWsh", fndWshCnt);
router.get("/lstWsh", lstWshCnt);
router.put("/updWsh", updWshCnt);
router.delete("/delWsh", delWshCnt);

//Product_sales actions
router.post("/regPsa", regPsaCnt);
router.get("/fndPsa", fndPsaCnt);
router.get("/lstPsa", lstPsaCnt);
router.put("/updPsa", updPsaCnt);
router.delete("/delPsa", delPsaCnt);

//Consumer_breadcrumbs actions
router.post("/regCbr", regCbrCnt);
router.get("/fndCbr", fndCbrCnt);
router.get("/lstCbr", lstCbrCnt);
router.put("/updCbr", updCbrCnt);
router.delete("/delCbr", delCbrCnt);

//Service_viewed actions
router.post("/regSvd", regSvdCnt);
router.get("/fndSvd", fndSvdCnt);
router.get("/lstSvd", lstSvdCnt);
router.delete("/delSvd", delSvdCnt);

//Product_viewed actions
router.post("/regPvd", regPvdCnt);
router.get("/fndPvd", fndPvdCnt);
router.get("/lstPvd", lstPvdCnt);
router.delete("/delPvd", delPvdCnt);

//Shopping_cart actions
router.post("/regSho", regShoCnt);
router.get("/fndSho", fndShoCnt);
router.get("/lstSho", lstShoCnt);
router.put("/updSho", updShoCnt);
router.delete("/delSho", delShoCnt);

//Appointments actions
router.post("/regApo", regApoCnt);
router.put("/updApo", updApoCnt);
router.delete("/delApo", delApoCnt);

//Product_receipt actions
router.post("/regPre", regPreCnt);
router.get("/fndPre", fndPreCnt);
router.get("/lstPre", lstPreCnt);
router.delete("/delPre", delPreCnt);

//Service_receipt actions
router.post("/regSre", regSreCnt);
router.get("/fndSre", fndSreCnt);
router.get("/lstSre", lstSreCnt);
router.delete("/delSre", delSreCnt);

//Shopping_cart_product actions
router.post("/regScp", regScpCnt);
router.get("/fndScp", fndScpCnt);
router.get("/lstScp", lstScpCnt);
router.put("/updScp", updScpCnt);
router.delete("/delScp", delScpCnt);

//Strorage actions
router.post("/regSto", regStoCnt);
router.get("/fndSto", fndStoCnt);
router.get("/lstSto", lstStoCnt);
router.put("/updSto", updStoCnt);
router.delete("/delSto", delStoCnt);
//
//Example actions
//router.post("/regExm", regExmCnt);
//router.get("/fndExm", fndExmCnt);
//router.get("/lstExm", lstExmCnt);
//router.put("/updExm", updExmCnt);
//router.delete("/delExm", delExmCnt);

export default router;
