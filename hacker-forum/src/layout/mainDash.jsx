/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const MainDash = () => {
  const getDate = new Date();
  const displayTime = getDate.toLocaleTimeString();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [time, setTime] = useState(displayTime);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((messages) => [...messages, data]);
    });

    // Clean up event listeners on unmounting
    return () => {
      socket.off("message");
    };
  }, [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message && time) {
      socket.emit("message", { message, time });
      setMessage("");
      setTime(displayTime);
    }
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
          <ul>
            {messages.map((message, index) => (
              <li key={index}>
                {message.time}: {message.message}
              </li>
            ))}
          </ul>
        </div>

        {/* Chat input */}
        <div className="p-4 border-t border-gray-800">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full rounded-full px-4 py-2 border bg-gray-700 border-gray-700 focus:outline-none"
              />
              <input
                value={time}
                type="hidden"
                onChange={(event) => setTime(event.target.value)}
              />
              <button
                type="submit"
                className="absolute top-1 right-4 bg-slate-500 px-3 py-1 rounded-xl"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainDash;
