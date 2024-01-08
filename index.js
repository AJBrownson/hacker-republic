const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const socketio = require('socket.io');
const http = require('http');
const app = express();
// const server = require('http').Server(app);
const server = http.createServer(app);
const io = socketio(server);
const connectDB = require('./config/db')
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();
const port = process.env.PORT || 5000;


// Connects the applicaton to MongoDB
connectDB()

// Middleware
app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
app.use(express.json());


// Use routes
app.use('/chat', chatRoutes(io)); // Pass io to the chatRoutes


// Start server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});