import React from "react";
import { Slide } from "react-slideshow-image";
import cover from "../images/c.png";

const handleMouseMove = (e, id) => {
  const { clientX, clientY } = e;
  const card = document.getElementById(id);
  const { left, top, width, height } = card.getBoundingClientRect();
  const mouseX = clientX - left;
  const mouseY = clientY - top;
  const rotationX = 5 - (10 * mouseY) / height;
  const rotationY = (10 * mouseX) / width - 5;
  card.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
};

const handleMouseLeave = (e, id) => {
  const card = document.getElementById(id);
  card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
};

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
