const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  // connceting to databse...
  // jaba samma database sanga connect hudaina wait gar...
  await mongoose.connect(
    "mongodb+srv://garnukehi:garnukehi@cluster0.aijmlf8.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Database connested successfully");
};
