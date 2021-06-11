import React from "react";
import "../styles/Banner.css";
import Carousel from "./Carousel";

const Banner5 = () => {
  return (
    <div className="fifth-banner">
      <div className="lorem5">
        <h1>
          LOREM IPSUM <br />
          DOLOR SIT AMET
        </h1>
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default Banner5;
