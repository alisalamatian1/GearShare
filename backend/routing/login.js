const express = require("express");
const router = express.Router();
const {login, signUp} = require("../controller/loginController");

router.route("/login").post(login);
router.route("/signUp").post(signUp);

module.exports = router;