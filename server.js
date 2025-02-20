const { cpSync } = require("fs");
const net = require("net");

const clients = [];

const server = net.createServer((socket) => {
  console.log("Client connected:", socket.remoteAddress);

  clients.push(socket);

  socket.on("data", (data) => {
    const message = data.toString().trim();
    console.log("Received data:", message);

    clients.forEach((client) => {
      if (client !== socket && !client.destroyed) {
        client.write(`${socket.remoteAddress}: ${message}`);
      }
    });
  });

  socket.on("end", () => {
    console.log("Client disconnected");
    const index = clients.indexOf(socket);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });

  socket.on("error", (err) => {
    console.error(
      `Socket error for client ${socket.remoteAddress}:`,
      err.message
    );
  });
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
