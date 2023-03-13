const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");
console.log("Router is loaded");
router.get("/", homeController.home);
//any of the futher routes used like this
router.use('/users', require('./users'));
router.use('/users', require('./post'));

module.exports = router;
