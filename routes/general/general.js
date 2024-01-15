const { homePageGet } = require("../../controllers/general/home");
const { merchantPageGet } = require("../../controllers/general/merchant");
const { verifyPageGet } = require("../../controllers/general/verify");
const { shoppingPageGet , jobPageGet } = require("../../controllers/general/shopping");
const { earnersPageGet } = require("../../controllers/general/topearners");
const { blogPageGet } = require("../../controllers/general/blog");
const { contactPageGet } = require("../../controllers/general/contact");









const generalRoute = require("express").Router();

//HOMEPAGE
generalRoute.route("/").get(homePageGet)

//SHOPPINGPAGE
generalRoute.route("/marketplace").get(shoppingPageGet)

//TOPEARNERPAGE
generalRoute.route("/top-earner").get(earnersPageGet)

//MERCHANTPAGE
generalRoute.route("/merchant").get(merchantPageGet)

//VERIFYPAGE
generalRoute.route("/verify-pin").get(verifyPageGet)

//BLOGPAGE
generalRoute.route("/blog").get(blogPageGet)

//JOBPAGE
generalRoute.route("/job").get(jobPageGet)

//CONTACTPAGE
generalRoute.route("/contact-us").get(contactPageGet)




module.exports = generalRoute