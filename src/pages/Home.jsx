import React from "react";
import "react-slideshow-image/dist/styles.css";
import Cards from "../components/Cards";
import Cover from "../components/Cover";
import { getVideosInfo } from "../services/api";

function Home() {
  const videos = getVideosInfo();


  return (
    <>
      <Cover videos={videos} />

      <h2 className="cards-catogary-title">
        <strong style={{color:"#01E8FE"}}>Live</strong> streams we think you'll like
      </h2>

      <Cards videos={videos} />

      <h2 className="cards-catogary-title">
        Recorded streams we think you'll like
      </h2>

      <Cards videos={videos} />
    </>
  );
}

export default Home;
