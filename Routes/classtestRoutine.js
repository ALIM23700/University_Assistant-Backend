const express = require("express");
const getclasstest = require("../Controller/classtestController");
const verifyToken = require("../Middleware.JS/authMiddleware"); 

const router2 = express.Router();


router2.get("/getclasstest", verifyToken(), getclasstest);

module.exports = router2;
