const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const socketIO = require('socket.io');
const http = require('http');
const app = express();
// const server = require('http').Server(app);
// const server = http.createServer(app);
// const io = socketio(server);
const server = http.createServer(app);
const io = socketIO(server);
const connectDB = require('./config/db')
// const chatRoutes = require('./routes/chatRoutes');
const Chat = require('./models/chatModel')

dotenv.config();
const port = process.env.PORT || 5000;


// Connects the applicaton to MongoDB
connectDB()

// Middleware
app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
// app.use(express.json());

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('New client connected');

  // Example: Listen for chat messages from the client
  socket.on('chatMessage', async (data) => {
    // Save the received message to MongoDB
    const newChat = new Chat({
      message: data.message,
      // username: data.username,
    });

    await newChat.save();

    // Broadcast the message to all connected clients
    io.emit('chatMessage', data);
  });

  // Example: Disconnect event handling
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});


// Use routes
// app.use('/chat', chatRoutes(io)); // Pass io to the chatRoutes


// Start server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});