const Class = require("../Models/Class");

const getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        res.json(classes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const addClass = async (req, res) => {
    try {
        const newClass = await Class.create({ ...req.body, approved: false });
        res.json(newClass);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const approveClass = async (req, res) => {
    try {
        const cls = await Class.findByIdAndUpdate(
            req.params.id,
            { approved: true },
            { new: true }
        );
        res.json(cls);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const cancelClass = async (req, res) => {
    try {
        const cls = await Class.findByIdAndUpdate(
            req.params.id,
            { approved: false },
            { new: true }
        );
        res.json(cls);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getTodaysClasses = async (req, res) => {
    try {
        const today = new Date().toLocaleString("en-US", { weekday: "long", timeZone: "Asia/Dhaka" });
        const classes = await Class.find({ day: today });
        res.json(classes.map(c => ({
            _id: c._id,
            day: c.day,
            subject: c.subject,
            department: c.department,
            place: c.place,
            time: c.time,
            approved: c.approved
        })));
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getAllClasses, addClass, approveClass, cancelClass, getTodaysClasses };
