import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chat from "../components/Chat";
import { Player, BigPlayButton, PosterImage } from "video-react";
import "video-react/dist/video-react.css";
import thumnail from "../images/thumb.png";

function RecordedVideo() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const playerRef = useRef(null);

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
          //   width={10}
          autoPlay={true}
          //   fluid={false}
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
