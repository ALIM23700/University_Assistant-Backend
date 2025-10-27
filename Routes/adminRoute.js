const express = require("express");
const {
  classtest,
  assignment,
  routine,
  updateclasstest,
  deleteclasstest,
  updateassignment,
  deleteassignment,
  deleteroutine
} = require("../Controller/adminController");

const verifyToken = require("../Middleware.JS/authMiddleware"); 

const router = express.Router();


router.post("/classtest", verifyToken(["admin"]), classtest);
router.put("/updateclasstest/:id", verifyToken(["admin"]), updateclasstest);
router.delete("/deleteclasstest/:id", verifyToken(["admin"]), deleteclasstest);

router.post("/assignment", verifyToken(["admin"]), assignment);
router.put("/updateassignment/:id", verifyToken(["admin"]), updateassignment);
router.delete("/deleteassignment/:id", verifyToken(["admin"]), deleteassignment);

router.post("/routine", verifyToken(["admin"]), routine);
router.delete("/deleteroutine/:id", verifyToken(["admin"]), deleteroutine);

module.exports = router;
