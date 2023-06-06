const express = require("express");
const router = express.Router();
const { login } = require("./Authentication/UserAuth");

router.route("/LoginRoute").post(login);

module.exports = router;
