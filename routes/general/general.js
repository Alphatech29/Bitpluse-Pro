const { homePageGet } = require("../../controllers/general/home");
const { shoppingPageGet } = require("../../controllers/general/shopping");






const generalRoute = require("express").Router();

//HOMEPAGE
generalRoute.route("/").get(homePageGet)

//SHOPPINGPAGE
generalRoute.route("/marketplace").get(shoppingPageGet)





module.exports = generalRoute