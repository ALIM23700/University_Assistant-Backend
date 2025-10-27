const express = require("express");
const router = require("./Routes/adminRoute");
const router2 = require("./Routes/classtestRoutine");
const router3 = require("./Routes/assignmentRoute");
const router4 = require("./Routes/routineRoute");
const cors=require("cors");
const router5 = require("./Routes/authRoute");
const router6 = require("./Routes/resourceRoute");
const router7 = require("./Routes/classRoutes");
require("./Models/db");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);
app.use("/api", router2);
app.use("/api", router3);
app.use("/api", router4);
app.use("/api", router5);
app.use("/api", router6);
app.use("/api", router7);


module.exports = app;
