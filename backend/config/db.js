const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(`Connected to MongoDB server.`))
//   .then(() => console.log(`Connected to MongoDB server.`,mongoose.connection.host))
  .catch((error) =>
    console.log(`Connection Failed with MongoDB server.`, error)
  );
