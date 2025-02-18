const net = require("net");

const server = net.createServer((socket) => {
  console.log("Client connected:", socket.remoteAddress);

  socket.on("data", (data) => {
    const message = data.toString().trim();
    console.log("Recieved message:", message);

    socket.write(`Echo: ${message}\n`);
  });

  socket.on("end", () => {
    console.log("Client disconnected:", socket.remoteAddress);
  });

  socket.on("errpr", (err) => {
    console.error("Socket error:", err.message);
  });
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
