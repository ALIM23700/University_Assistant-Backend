const ClassTest = require("../Models/classtestModel");

const getclasstest = async (req, res) => {
  try {
    let newgetclasstest;

    if (req.user.role === "admin") {
      newgetclasstest = await ClassTest.find({ createdBy: req.user.id });
    } else {
      newgetclasstest = await ClassTest.find({ Department: req.user.department });
    }

    res.status(200).json({
      success: true,
      newgetclasstest
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = getclasstest;
