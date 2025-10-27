const express = require("express");
const getassignment = require("../Controller/assignmentController");
const verifyToken = require("../Middleware.JS/authMiddleware");

const router3 = express.Router();


router3.get("/getassignment", verifyToken(), getassignment);

module.exports = router3;
