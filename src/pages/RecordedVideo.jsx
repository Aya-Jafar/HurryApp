import React, { useRef, useEffect, useState } from "react";
import Chat from "../components/Chat";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import debounce from "lodash/debounce";
import { useParams } from "react-router-dom";
import { getVideoById } from "../services/api";
import UserInfo from "../components/UserInfo";

function RecordedVideo() {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const playerRef = useRef(null);

  useEffect(() => {
    getVideoById(id, setCurrentVideo);
  }, [id]);

  useEffect(() => {
    const pauseSocket = new WebSocket(`ws://localhost:20000/${id}`);
    const timeSocket = new WebSocket(`ws://localhost:30000/${id}`);

    const sendPauseMessage = debounce(
      (paused) => {
        if (pauseSocket.readyState === WebSocket.OPEN) {
          pauseSocket.send(JSON.stringify({ paused: paused }));
        }
      },
      0,
      { leading: true, trailing: false, maxWait: 1000 }
    );

    const sendTimeMessage = debounce(
      (startTime) => {
        if (timeSocket.readyState === WebSocket.OPEN) {
          timeSocket.send(JSON.stringify({ startTime: startTime }));
        }
      },
      600,
      { leading: true, trailing: false, maxWait: 1000 }
    );

    const handleStateChange = (state, prevState) => {
      if (state.paused !== prevState.paused) {
        sendPauseMessage(state.paused);
      }

      if (state.seekingTime !== prevState.seekingTime) {
        sendTimeMessage(state.seekingTime);
      }
    };

    pauseSocket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (data.hasOwnProperty("paused")) {
        if (data.paused) {
          playerRef.current.pause();
        } else {
          playerRef.current.play();
        }
      }
    });

    timeSocket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (data.hasOwnProperty("startTime")) {
        playerRef.current.seek(data.startTime);
      }
    });

    playerRef.current.subscribeToStateChange(handleStateChange);

    // Clean up the WebSocket connections on component unmount
    return () => {
      pauseSocket.close();
      timeSocket.close();
    };
  }, [playerRef]);

  console.log(currentVideo);

  return (
    <div className="stream-page">
      <div className="stream" style={{ width: "70%" }}>
        <Player
          src={`http://127.0.0.1:8000${currentVideo?.video_file}`}
          ref={playerRef}
          controls={true}
        >
          <BigPlayButton position="center" />
        </Player>
        <UserInfo currentVideo={currentVideo} />
      </div>
      <Chat />
    </div>
  );
}

export default RecordedVideo;
