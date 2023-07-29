const express = require("express");
const router = express.Router();
const authenticationMiddleWare = require("../middleware/auth");

const { dashboard, login } = require("../controllers/main");

router.route("/dashboard").get(authenticationMiddleWare, dashboard);
router.route("/login").post(login);

module.exports = router;
