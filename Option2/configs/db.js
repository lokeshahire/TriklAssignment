const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(
  "mongodb+srv://lokesh:ahire@cluster0.entjnlc.mongodb.net/TRIKL"
);

module.exports = {
  connection,
};
