const express = require("express");
const { chats } = require("../data/data");

const app = express.Router();

app.get("/", (req, res) => {
  res.send(chats);
});

app.get("/:id", (req, res) => {
  const singleChat = chats.find((el) => el._id === req.params.id);
  res.send(singleChat);
});

module.exports = app;
