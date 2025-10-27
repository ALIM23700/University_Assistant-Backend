const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" MongoDB is connected");
  })
  .catch((error) => {
    console.error(" MongoDB is not connected", error);
  });
