import React from "react";
import "../styles/Banner5.css";
import CarouselReviews from "./CarouselReviews";

const Banner5 = () => {
  return (
    <div className="fifth-banner">
      <div className="lorem5">
        <h1 className="lorem-title-5">
          LOREM IPSUM <br />
          DOLOR SIT AMET
        </h1>
        <p className="stars">★ ★ ★ ★ ★</p>
      </div>
      <div className="carousel">
        <CarouselReviews />
      </div>
    </div>
  );
};

export default Banner5;
