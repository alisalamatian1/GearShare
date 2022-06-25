const express = require("express");
const router = express.Router();
const login = require("../controller/loginController");

router.route("/login").post(login);

module.exports = router;