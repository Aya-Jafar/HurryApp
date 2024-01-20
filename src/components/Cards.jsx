import React, { useEffect, useState } from "react";
import { getVideosInfo } from "../services/api";
import VideoCard from "./VideoCard";

function Cards() {
  const [videos, setVideosList] = useState([]);

  useEffect(() => {
    getVideosInfo(setVideosList);
  }, []);

  return (
    <>
      <div className="cards">
        {videos?.map((video, index) => (
          <VideoCard video={video}/>
        ))}
      </div>
    </>
  );
}

export default Cards;
