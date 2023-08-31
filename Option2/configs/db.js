const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://lokesh:ahire@cluster0.entjnlc.mongodb.net/TRIKL"
);

module.exports = {
  connection,
};
