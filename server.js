const WebSocket = require("ws");
const readline = require("readline");

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });
console.log("WebSocket server running on ws://localhost:8080");

// Setup a readline interface for server input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Listen for messages from the client
  ws.on("message", (message) => {
    console.log(`Client: ${message}`);

    // Prompt server user to reply
    rl.question("Enter your reply: ", (reply) => {
      ws.send(reply); // Send reply back to client
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
