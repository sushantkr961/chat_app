require("dotenv").config();
const express = require("express");

const userRoutes = require("./routes/user.routes");
const chatRoutes = require("./routes/chat.routes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
// console.log(chats);

const app = express();
const PORT = process.env.PORT;

require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chat App Api is Running");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

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
