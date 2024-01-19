import React, { useRef, useEffect } from "react";
import Chat from "../components/Chat";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import thumnail from "../images/thumb.png";
import testVideo from "./test.mp4";
import debounce from "lodash/debounce";

function RecordedVideo() {
  const playerRef = useRef(null);
  const pauseSocketRef = useRef(null);
  const timeSocketRef = useRef(null);

  const sendPauseMessage = debounce(
    (paused) => {
      if (pauseSocketRef.current.readyState === WebSocket.OPEN) {
        pauseSocketRef.current.send(
          JSON.stringify({
            paused: paused,
          })
        );
      }
    },
    0,
    { leading: true, trailing: false, maxWait: 1000 }
  );

  const sendTimeMessage = debounce(
    (currentTime) => {
      if (timeSocketRef.current.readyState === WebSocket.OPEN) {
        timeSocketRef.current.send(
          JSON.stringify({
            startTime: currentTime,
          })
        );
      }
    },
    600,
    { leading: true, trailing: false, maxWait: 1000 }
  );

  useEffect(() => {
    pauseSocketRef.current = new WebSocket("ws://localhost:20000");
    timeSocketRef.current = new WebSocket("ws://localhost:30000");

    // Add event listeners for play and pause events
    playerRef.current.subscribeToStateChange((state, prevState) => {
      if (state.paused !== prevState.paused) {
        sendPauseMessage(state.paused);
      }
      if (state.currentTime !== prevState.currentTime) {
        sendTimeMessage(state.currentTime);
      }
    });

    // Clean up the WebSocket connection on component unmount
    return () => {
      pauseSocketRef.current.close();
      timeSocketRef.current.close();
    };
  }, [playerRef]);

  useEffect(() => {
    pauseSocketRef.current.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (data.hasOwnProperty("paused")) {
        if (data.paused) {
          playerRef.current.pause();
        } else {
          playerRef.current.play();
        }
      }
    });

    timeSocketRef.current.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (data.hasOwnProperty("startTime")) {
        playerRef.current.seek(data.startTime);
      }
    });
  }, []);

  return (
    <div className="stream-page">
      <div className="stream" style={{ width: "70%" }}>
        <Player
          src={testVideo}
          ref={playerRef}
          poster={thumnail}
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
