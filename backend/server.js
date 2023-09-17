require("dotenv").config();
const express = require("express");

const { chats } = require("./data/data");
// console.log(chats);

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chat App Api is Running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((el) => el._id === req.params.id);
  res.send(singleChat);
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`PORT Yes I am connected to ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
