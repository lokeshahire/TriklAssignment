const express = require("express");
const { ItemModel } = require("../model/item.model");

const itemRouter = express.Router();

itemRouter.get("/", async (req, res) => {
  const items = await ItemModel.find();
  res.send(items);
});

itemRouter.post("/", async (req, res) => {
  const item = new ItemModel(req.body);
  await item.save();
  res.send({ msg: "Item Created" });
});

itemRouter.put("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await ItemModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({ msg: "Item Updated successfully" });
  } catch (e) {
    res.send("Something went wrong");
  }
});

itemRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await ItemModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "Item Deleted successfully" });
  } catch (e) {
    res.send("Something went wrong");
  }
});

module.exports = { itemRouter };
