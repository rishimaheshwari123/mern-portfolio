const express = require("express");
const { sendEmailCtrl } = require("../controllers/portfolioCtrl");
const router = express.Router();

router.post("/sendEmail", sendEmailCtrl);

module.exports = router;