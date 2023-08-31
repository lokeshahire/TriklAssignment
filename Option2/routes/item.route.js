const express = require("express");
const { ItemModel } = require("../model/item.model");

const itemRouter = express.Router();

itemRouter.get("/", async (req, res) => {
  const products = await ItemModel.find();
  res.send(products);
});

module.exports = { itemRouter };
