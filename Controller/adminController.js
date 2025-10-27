const Assignment = require("../Models/assignment");
const ClassTest = require("../Models/classtestModel");
const Routine = require("../Models/routine");

const classtest = async (req, res) => {
  try {
    const { SubjectName, TopicName, Department, Batch, Time } = req.body;
    const newclasstest = await ClassTest.create({
      SubjectName,
      TopicName,
      Department,
      Batch,
      Time,
      createdBy: req.user.id
    });
    res.status(200).json({ success: true, newclasstest });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const updateclasstest = async (req, res) => {
  try {
    const { id } = req.params;
    const { SubjectName, TopicName, Department, Batch, Time } = req.body;
    const updated = await ClassTest.findOneAndUpdate(
      { _id: id, createdBy: req.user.id },
      { SubjectName, TopicName, Department, Batch, Time },
      { new: true }
    );
    if (!updated)
      return res.status(404).json({ success: false, message: "ClassTest not found" });
    res.status(200).json({ success: true, updated });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const deleteclasstest = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ClassTest.findOneAndDelete({ _id: id, createdBy: req.user.id });
    if (!deleted)
      return res.status(404).json({ success: false, message: "ClassTest not found" });
    res.status(200).json({ success: true, deleted });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const assignment = async (req, res) => {
  try {
    const { SubjectName, TopicName, Department, Batch, Deadline, Time } = req.body;
    const newassignment = await Assignment.create({
      SubjectName,
      TopicName,
      Department,
      Batch,
      Deadline,
      Time,
      createdBy: req.user.id
    });
    res.status(200).json({ success: true, newassignment });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const updateassignment = async (req, res) => {
  try {
    const { id } = req.params;
    const { SubjectName, TopicName, Department, Batch, Deadline, Time } = req.body;
    const updated = await Assignment.findOneAndUpdate(
      { _id: id, createdBy: req.user.id },
      { SubjectName, TopicName, Department, Batch, Deadline, Time },
      { new: true }
    );
    if (!updated)
      return res.status(404).json({ success: false, message: "Assignment not found" });
    res.status(200).json({ success: true, updated });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const deleteassignment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Assignment.findOneAndDelete({ _id: id, createdBy: req.user.id });
    if (!deleted)
      return res.status(404).json({ success: false, message: "Assignment not found" });
    res.status(200).json({ success: true, deleted });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const routine = async (req, res) => {
  try {
    const { image } = req.body;
    const newroutine = await Routine.create({ image, createdBy: req.user.id });
    res.status(200).json({ success: true, newroutine });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const deleteroutine = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Routine.findOneAndDelete({ _id: id, createdBy: req.user.id });
    if (!deleted)
      return res.status(404).json({ success: false, message: "Routine not found" });
    res.status(200).json({ success: true, deleted });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  classtest,
  assignment,
  routine,
  updateclasstest,
  deleteclasstest,
  updateassignment,
  deleteassignment,
  deleteroutine,
};
