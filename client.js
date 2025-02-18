const net = require("net");

const client = new net.Socket();

client.connect(3000, "127.0.0.1", () => {
  console.log("Connected to server");
  client.write("Hello from client");
});

client.on("data", (data) => {
  console.log("Recieved from sever:", data.toString());
  client.destroy();
});

client.on("close", () => {
  console.log("Connection closed");
});
