const Assignment = require("../Models/assignment");

const getassignment = async (req, res) => {
  try {
    let newgetassignment;

    if (req.user.role === "admin") {
      newgetassignment = await Assignment.find({ createdBy: req.user.id });
    } else {
      newgetassignment = await Assignment.find({ Department: req.user.department });
    }

    res.status(200).json({
      success: true,
      newgetassignment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = getassignment;
