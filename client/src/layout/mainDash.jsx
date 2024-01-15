/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");




const MainDash = () => {
  const getDate = new Date();
  const displayTime = getDate.toLocaleTimeString();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  // const [time, setTime] = useState(displayTime);

  // useEffect(() => {
  //   socket.on("message", (data) => {
  //     setMessages((messages) => [...messages, data]);
  //   });

  //   // Clean up event listeners on unmounting
  //   return () => {
  //     socket.off("message");
  //   };
  // }, [messages]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (message) {
  //     socket.emit("message", { message});
  //     setMessage("");
  //     // setTime(displayTime);
  //   }
  // };

  useEffect(() => {
    // Listen for incoming chat messages from the server
    socket.on('chatMessage', (data) => {
      setMessages([...messages, data]);
    });

    // Clean up event listeners on unmounting
    return () => {
      socket.off('chatMessage');
    };
  }, [messages]);

  const sendMessage = () => {
    // Send a chat message to the server
    socket.emit('chatMessage', { message });
    setMessage('');
  };  

  return (
    <>
      <div className="flex-1 flex flex-col text-white">
        {/* Chat window header */}
        <div className="p-4 border-b border-gray-800 ">
          <p className="text-lg font-semibold">Chat Window</p>
        </div>

        {/* Chat messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg, index) => (
          <div key={index}>
            <p>{msg.message}</p>
          </div>
        ))}
        </div>

        {/* Chat input */}
        <div className="p-4 border-t border-gray-800">
          {/* <form> */}
            <div className="relative">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-full px-4 py-2 border bg-gray-700 border-gray-700 focus:outline-none"
              />
              {/* <input
                value={time}
                type="hidden"
                onChange={(event) => setTime(event.target.value)}
              /> */}
              <button
                type="submit"
                onClick={sendMessage}
                className="absolute top-1 right-4 bg-slate-500 px-3 py-1 rounded-xl"
              >
                Send
              </button>
            </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default MainDash;
