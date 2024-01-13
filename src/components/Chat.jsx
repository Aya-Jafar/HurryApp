import React from "react";
import profileImg from "../images/Profile.webp";

function Chat() {
  const chatStream = [
    {
      userId: 1,
      value: "awesome",
    },
    { userId: 2, value: "awesome" },
    { userId: 3, value: "awesome" },
  ];
  return (
    <>
      <div className="chat">
        {chatStream.map((chatElement) => (
          <div className="chat-element">
            <img src={profileImg} />
            <div>
              <h4>{`User ${chatElement.userId}`}</h4>
              <div>{chatElement.value}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Chat;
