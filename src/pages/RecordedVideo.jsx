import React, { useState, useRef, useEffect } from "react";
import Chat from "../components/Chat";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import thumnail from "../images/thumb.png";

function RecordedVideo() {
  const playerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [startTime, setStartTime] = useState(0);

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket(process.env.REACT_APP_WS_URL);

    // Add event listeners for play and pause events
    playerRef.current.subscribeToStateChange((state, prevState) => {
      if (
        state.paused !== prevState.paused ||
        state.currentTime !== prevState.currentTime
      ) {
        if (socketRef.current.readyState === WebSocket.OPEN) {
          console.log(state.currentTime);
          socketRef.current.send(
            JSON.stringify({
              paused: state.paused,
              startTime: state.currentTime,
            })
          );
        }
      }
    });

    // Set up event listener for receiving the initial "paused" state
    socketRef.current.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (data.hasOwnProperty("paused")) {
        // console.log(data);
        setIsPaused(data.paused);

        // Pause or play the video based on the received state
        if (data.paused) {
          playerRef.current.pause();
        } else {
          playerRef.current.play();
        }
      }

      if (data.hasOwnProperty("startTime")) {
        playerRef.current.seek(data.startTime);
        setStartTime(data.startTime);
      }
    });

    // Clean up the WebSocket connection on component unmount
    return () => {
      socketRef.current.close();
    };
  }, [playerRef, isPaused]);

  // console.log(playerRef?.current?.getState());

  return (
    <div className="stream-page">
      <div className="stream" style={{ width: "70%" }}>
        <Player
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          ref={playerRef}
          poster={thumnail}
          startTime={startTime}
          autoplay={true}
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
