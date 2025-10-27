const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    day: { type: String, required: true },
    subject: { type: String, required: true },
    department: { type: String, required: true },
    place: { type: String, required: true },
    time: { type: String, required: true },
    approved: { type: Boolean, default: false }
});

module.exports = mongoose.model("Class", classSchema);
