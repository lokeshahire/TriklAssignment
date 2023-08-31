const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  title: String,
  image: String,
  description: String,
  rating: Number,
  price: Number,
  Date: { type: Date },
});

const ItemModel = mongoose.model("item", itemSchema);

module.exports = {
  ItemModel,
};
