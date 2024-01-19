import { useEffect, useRef } from "react";
import VideoThumbnail from "react-video-thumbnail";
import avatarImage from "../images/Profile.webp";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="card" key={video.id}>
      <Link to={`/stream/${video.id}`}>
        <div className="thumbnail-container">
          <VideoThumbnail
            width={500}
            snapshotAtTime={3}
            height={300}
            videoUrl={`http://127.0.0.1:8000${video.video_file}`}
          />
        </div>

        <div className="user-info">
          <img src={avatarImage} alt="User Avatar" />
          <div>
            <h3>{video.title}</h3>
            <p>{video.profile.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
