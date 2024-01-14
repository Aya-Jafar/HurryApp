import React from "react";
import cover from "../images/c.png";
import { handleMouseLeave, handleMouseMove } from "../animation";

function Cover({ videos }) {
  return (
    <div className="cover">
      <div className="cover-text">
        <h1>Elevate Your Gaming</h1>
        <p>Immerse Yourself in the Gaming Universe: Stream, Connect, </p>
        <p>and Share! Unleash Your Passion, Engage with Friends,</p>
        <p>and Make Your Gaming Experience Epic.</p>
        <button className="btns" id="cover-btn">
          Start browsing
        </button>
      </div>
      <div
        onMouseMove={(e) => {
          handleMouseMove(e, "cover");
        }}
        onMouseLeave={(e) => {
          handleMouseLeave(e, "cover");
        }}
      >
        <img src={cover} alt="" id="cover" />
      </div>
    </div>
  );
}

export default Cover;
