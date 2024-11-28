const WebSocket = require("ws");
const readline = require("readline");

// Connect to the WebSocket server
const ws = new WebSocket("ws://localhost:8080");

// Setup a readline interface for client input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

ws.on("open", () => {
  console.log("Connected to WebSocket server");

  // Prompt user to send the first message
  rl.question("Enter a message: ", (message) => {
    ws.send(message); // Send the message to the server
  });
});

ws.on("message", (message) => {
  console.log(`Server: ${message}`);

  // Prompt user to reply to server
  rl.question("Enter your reply: ", (reply) => {
    ws.send(reply); // Send reply to server
  });
});

ws.on("close", () => {
  console.log("Disconnected from the server");
  rl.close(); // Close readline interface
});

ws.on("error", (error) => {
  console.error(`WebSocket error: ${error}`);
});
