const Resource = require("../Models/resourceModel");
const path = require("path");


const uploadResource = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: "No file uploaded" });

    const newResource = await Resource.create({
      title: req.body.title,
      filename: req.file.filename,
    });

    res.status(201).json({ success: true, resource: newResource });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const getResources = async (req, res) => {
  try {
    const resources = await Resource.find().sort({ uploadedAt: -1 });
    res.status(200).json({ success: true, resources });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


const downloadResource = (req, res) => {
  const file = path.join(__dirname, "../uploads/", req.params.filename);
  res.download(file);
};

module.exports = { uploadResource, getResources, downloadResource };
