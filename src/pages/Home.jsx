import React, { useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import Cards from "../components/Cards";
import Cover from "../components/Cover";

function Home() {
  return (
    <>
      <Cover />

      <h2 className="cards-catogary-title">
        <strong style={{ color: "#01E8FE" }}>Live</strong> streams we think
        you'll like
      </h2>

      <Cards />

      <h2 className="cards-catogary-title">
        Recorded streams we think you'll like
      </h2>

      <Cards />
    </>
  );
}

export default Home;
