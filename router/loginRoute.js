const express = require("express");
const { login } = require("../authentication/UserAuth.js");

const router = express.Router();

router.post("/", login);

module.exports = router;
