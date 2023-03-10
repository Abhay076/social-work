const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/social_work_dev");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to database"));

db.once("open", function () {
  console.log("Successfully connected to Databse");
});

module.exports = db;
