# Echo Server

A simple TCP echo server built with Node.js It listens for incoming messages and sends them back to the client.

## Features

- Supports multiple clients simultaneously.
- Handles conneсtion errors gracefully.
- Lightweight and easy to extend.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/echo-server.git
   ```
2. Navigate to the project directory:
   cd echo-server
3. Install dependencies (if any):
   npm install
4. Start the server:
   node server.js

## Usage

1. Connect to the server using a TCP client (e.g., telnet):
   telnet localhost 3000
2. Send a message, and the server will echo it back.
