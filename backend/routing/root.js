const express = require('express');
const router = express.Router();

router.route("/").get(list_all);


module.exports = router;