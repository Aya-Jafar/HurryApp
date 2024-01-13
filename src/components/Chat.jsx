import React, { useEffect, useRef, useState } from "react";
import profileImg from "../images/Profile.webp";
import { TextField } from "@mui/material";

function Chat() {
  const [chatStream, setChatStream] = useState([
    {
      userId: 1,
      value: "awesome",
    },
    { userId: 2, value: "awesome" },
    { userId: 3, value: "awesome" },
  ]);

  const socketRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Create a WebSocket connection only once
    socketRef.current = new WebSocket("ws://localhost:3000");

    // Set up event listener for messages
    socketRef.current.addEventListener("message", (event) => {
      console.log("Received message:", event.data);

      const receivedMessage = event.data;
      setChatStream((prevChatStream) => [
        ...prevChatStream,
        {
          userId: prevChatStream.length + 1,
          value: receivedMessage,
        },
      ]);
    });

    // Clean up the WebSocket connection on component unmount
    return () => {
      socketRef.current.close();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;

    socketRef.current.send(message);
    messageInput.value = "";
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="chat" id="chat">
        {chatStream.map((chatElement) => (
          <div className="chat-element" key={chatElement.userId}>
            <img src={profileImg} alt={`User ${chatElement.userId}`} />
            <div>
              <h4>{`User ${chatElement.userId}`}</h4>
              <div>{chatElement.value}</div>
            </div>
          </div>
        ))}
        <div className="comment-input">
          <TextField
            ref={inputRef}
            onKeyDown={handleKeyDown}
            label="comment"
            variant="outlined"
            id="messageInput"
            sx={{
              width: "100%",
              "& label": {
                color: "white", // Label color
              },
              "& fieldset": {
                borderColor: "white !important", // Border color
              },
            }}
            inputProps={{
              style: {
                color: "white", // Text color
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Chat;
