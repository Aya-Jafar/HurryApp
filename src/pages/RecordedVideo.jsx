import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat";
import { Player, BigPlayButton, PosterImage } from "video-react";
import "video-react/dist/video-react.css";
import thumnail from "../images/thumb.png";
import io from "socket.io-client";


function RecordedVideo() {
  const [video, setVideo] = useState(null);
  const playerRef = useRef(null);

  const [socket, setSocket] = useState(null);

  const [isSocketOpen, setIsSocketOpen] = useState(false);

  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  // Function to send a message
  const sendMessage = () => {
    if (currentMessage) {
      socket.emit("message", "hello!!!");
      // setCurrentMessage("");
    }
  };

  useEffect(() => {
    // Listen for incoming messages
    socket?.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  useEffect(() => {

    return () => {};
  }, []);

  // console.log(socket);

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
