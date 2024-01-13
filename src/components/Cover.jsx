import React from "react";
import { Slide } from "react-slideshow-image";
import cover from "../images/c.png";

function Cover({ videos }) {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "500px",
    // backgroundColor: "red",
  };

  const cardsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "800%",
    // backgroundColor: "red",

    // maxHeight: "400px", // Set a maximum height for vertical scrolling
    overflowY: "auto",
    padding: "16px", // Add padding for better aesthetics
    // marginBottom: "120%",
  };
  return (
    // <Slide style={{ ...cardsContainerStyle }}>
    //   {videos.map((slideItem, index) => (
    //     <div key={index}>
    //       <div className="slide">
    //         <iframe
    //           width="100%"
    //           height="500"
    //           src={slideItem.url}
    //           title={`YouTube Video ${index}`}
    //           frameBorder="0"
    //         ></iframe>
    //       </div>
    //     </div>
    //   ))}
    // </Slide>
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
      <img src={cover} alt="" />
    </div>
  );
}

export default Cover;
