import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat";
import { Player, BigPlayButton, PosterImage } from "video-react";
import "video-react/dist/video-react.css";
import thumnail from "../images/thumb.png";
import io from "socket.io-client";

const socket = io("ws://socketsbay.com/wss/v2/2/demo/");

function RecordedVideo() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const playerRef = useRef(null);

  const [socket, setSocket] = useState(null);

  const [isSocketOpen, setIsSocketOpen] = useState(false);


  // const [messages, setMessages] = useState([]);
  // const [currentMessage, setCurrentMessage] = useState("");
  // // Function to send a message
  // const sendMessage = () => {
  //   if (currentMessage) {
  //     socket.emit("message", currentMessage);
  //     setCurrentMessage("");
  //   }
  // };
  // useEffect(() => {
  //   // Listen for incoming messages
  //   socket.on("message", (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });
  // }, []);

  useEffect(() => {
    // Create a WebSocket connection
    const newSocket = new WebSocket("wss://socketsbay.com/wss/v2/2/demo/");

    // // Set up event listeners
    // newSocket.addEventListener("open", (event) => {
    //   console.log("WebSocket opened");
    //   // Send an initial message to the server
    //   // newSocket.send("Hello Server!");
    //   setIsSocketOpen(true);
    // });

    // newSocket.addEventListener("message", (event) => {
    //   console.log("Message from server", event);
    // });

    // // newSocket.addEventListener("error", (event) => {
    // //   console.error("WebSocket error", event);
    // // });

    // newSocket.addEventListener("close", (event) => {
    //   console.log("WebSocket closed");
    //   // Implement reconnect logic if needed
    // });

    // // Store the socket in the state
    // setSocket(newSocket);

    // Clean up the WebSocket connection on component unmount

    return () => {};
  }, []);

  console.log(socket);

  useEffect(() => {
    if (playerRef.current) {
      setVideo(playerRef?.current?.getState().player);
      console.log(playerRef?.current?.getState().player.currentTime);
    }
    console.log(video);
    return () => {};
  }, [playerRef, video, playerRef?.current?.getState()]);

  return (
    <div className="stream-page">
      <div className="stream" style={{ width: "70%" }}>

        {/* <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
        </div> */}


        <Player
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          ref={playerRef}
          autoPlay={true}
          poster={thumnail}
          controls
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
      <Chat />
    </div>
  );
}

export default RecordedVideo;
