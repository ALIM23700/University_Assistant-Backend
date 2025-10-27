const mongoose = require("mongoose");

const classtestSchema = new mongoose.Schema({
  SubjectName: {
    type: String,
    required: true
  },
  TopicName: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  Batch: {
    type: String,
    required: true
  },
  Time: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const ClassTest = mongoose.model("ClassTest", classtestSchema);
module.exports = ClassTest;
