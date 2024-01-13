import React from "react";
import avatarImage from "../images/Profile.webp";
import { Link } from "react-router-dom";

function Cards({ videos }) {
  return (
    <>
      <div className="cards">
        {videos.map((video, index) => (
          <div key={index} className="card">
            <Link to={`/stream/${video.id}`}>
              <iframe
                width="100%"
                height="100%"
                src={video.url}
                frameBorder="0"
                allowFullScreen
              ></iframe>

              <div className="user-info">
                <img src={avatarImage} />
                <div>
                  <h3>{video.title}</h3>
                  <p>{video.userName}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
