const express = require("express");
const { addClass, approveClass, getTodaysClasses, getAllClasses, cancelClass } = require("../Controller/classController");
const router7 = express.Router();

router7.post("/add", addClass); 
router7.put("/approve/:id", approveClass); 
router7.put("/cancel/:id", cancelClass);
router7.get("/today", getTodaysClasses); 
router7.get("/all", getAllClasses);

module.exports = router7;
