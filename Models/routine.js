const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Routine = mongoose.model("Routine", routineSchema);
module.exports = Routine;
