// const net = require("net");

// const client = new net.Socket();

// client.connect(3000, "127.0.0.1", () => {
//   console.log("Connected to server");
//   client.write("Hello from client");
// });

// client.on("data", (data) => {
//   console.log("Recieved from sever:", data.toString());
//   client.destroy();
// });

// client.on("close", () => {
//   console.log("Connection closed");
// });
const net = require("net");

function createClient(clientNumber) {
  const client = new net.Socket();

  client.connect(3000, "127.0.0.1", () => {
    console.log(`Client ${clientNumber} connected to server\n`);
    client.write(`Hello from client ${clientNumber}\n`);
  });

  client.on("data", (data) => {
    console.log(
      `Client ${clientNumber} received data from server:`,
      data.toString()
    );
    client.destroy();
  });

  client.on("close", () => {
    console.log(`Client ${clientNumber} connection closed`);
  });
}

createClient(1);
createClient(2);
createClient(3);
