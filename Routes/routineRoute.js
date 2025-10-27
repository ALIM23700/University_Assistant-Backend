const express = require("express");
const getroutine = require("../Controller/routineController");
const verifyToken = require("../Middleware.JS/authMiddleware");

const router4 = express.Router();


router4.get("/getroutine", verifyToken(), getroutine);

module.exports = router4;
