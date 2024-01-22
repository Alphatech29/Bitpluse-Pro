
const { userDashboardGet} = require("../../controllers/user/dashboard");
const { userStakeholderGet} = require("../../controllers/user/stakeholder");
const { userMerchantGet} = require("../../controllers/user/merchant");
const { userWithdrawGet} = require("../../controllers/user/withdraw");
const { userJobGet} = require("../../controllers/user/job");
const { userShopGet} = require("../../controllers/user/shop");
const { userVtuGet} = require("../../controllers/user/vtu");
const { userUpgradeGet} = require("../../controllers/user/upgrade");
const { userTaskGet} = require("../../controllers/user/task");
const { userpublishProductGet} = require("../../controllers/user/publishProduct");
const { userProductVendorGet} = require("../../controllers/user/productVendor");
const { userProductListGet} = require("../../controllers/user/productlist");
const { userSellerGet} = require("../../controllers/user/sellerPortal");
const { userAdduserGet} = require("../../controllers/user/add-new-user");
const { userReferralGet} = require("../../controllers/user/referral");
const { userProfileGet, userSecurityGet, userBlockGet} = require("../../controllers/user/settings");
const userRoute = require("express").Router();

//<!-----------------DASHBOARD------------------>
//DASHBOARD
userRoute.route("/dashboard").get(userDashboardGet);

//MERCHANTDASHBOARD
userRoute.route("/merchant/dashboard").get(userMerchantGet);

//STAKEHOLDER
userRoute.route("/stakeholder").get(userStakeholderGet);

//SETTINGS
userRoute.route("/setting/profile").get(userProfileGet);

//SECURITY
userRoute.route("/setting/security").get(userSecurityGet)

//JOB DASHBOARD
userRoute.route("/job").get(userJobGet);

//WITHDRAW DASHBOARD
userRoute.route("/withdraw").get(userWithdrawGet);

//VTU DASHBOARD
userRoute.route("/vtu").get(userVtuGet);

//UPGRADE DASHBOARD
userRoute.route("/upgrade").get(userUpgradeGet);

//TASK DASHBOARD
userRoute.route("/task").get(userTaskGet);

//REFERRAL DASHBOARD
userRoute.route("/referral").get(userReferralGet);

//MARKET DASHBOARD
userRoute.route("/market/shop").get(userShopGet);

//ADD NEW PRODUCT
userRoute.route("/vendor/publish-product").get(userpublishProductGet);

//PRODUCT VENDOR
userRoute.route("/vendor/dashboard").get(userProductVendorGet);

//PRODUCT LIST
userRoute.route("/vendor/product-list").get(userProductListGet);

//SELLER PORTAL
userRoute.route("/market/shop/affiliate").get(userSellerGet);

//ADD NEW USER
userRoute.route("/p2p").get(userAdduserGet);

//WEBVIEW BLOCK
userRoute.route("/*").get(userBlockGet);



module.exports = userRoute