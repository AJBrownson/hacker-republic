const express = require('express');
const router = express.Router();
const Chat = require('../models/chatModel');


// Socket.IO connection handling
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected');

    // Listen for chat messages from the client
    socket.on('message', async (data) => {
      // Save the received message to MongoDB
      const newChat = new Chat({
        message: data.message,
        time: data.time,
      });

      await newChat.save();

      // Broadcast the message to all connected clients
      io.emit('message', data);
    });

    // Disconnect event handling
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
  
  return router;
};