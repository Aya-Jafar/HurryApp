import React from "react";
import avatarImage from "../images/Profile.webp";

function UserInfo({ currentVideo }) {
  return (
    <div className="user-info-in-video-page">
      <img src={avatarImage} alt="" />
      <div>
        <h3 style={{ margin: 0 }}>{currentVideo?.profile?.name}</h3>
        <p>{currentVideo?.profile?.user?.email}</p>
      </div>
    </div>
  );
}

export default UserInfo;
