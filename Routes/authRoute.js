const express = require("express");
const { register, login } = require("../Controller/authController");
const verifyToken = require("../Middleware.JS/authMiddleware");

const router5 = express.Router();

// Public routes
router5.post("/register", register);
router5.post("/login", login);

// Protected routes examples
router5.get("/admin-only", verifyToken(["admin"]), (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.id}` });
});

router5.get("/user-access", verifyToken(["user", "admin"]), (req, res) => {
  res.json({ message: `Hello ${req.user.role} ${req.user.id}` });
});

module.exports = router5;
