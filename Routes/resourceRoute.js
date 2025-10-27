const express = require("express");
const multer = require("multer");
const { uploadResource, getResources, downloadResource } = require("../Controller/resourceController");
const verifyToken = require("../Middleware.JS/authMiddleware");

const router6 = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });


router6.post("/upload",  upload.single("file"), uploadResource);
router6.get("/get", verifyToken(), getResources);
router6.get("/download/:filename", verifyToken(), downloadResource);

module.exports = router6;
