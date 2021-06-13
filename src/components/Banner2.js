import React from "react";
import "../styles/Banner2.css";
import banner from "../assets/banner-1.jpg";

const Banner2 = () => {
  return (
    <div className="second-banner">
      <div className="lorem2">
        <h1 className="lorem-title">LOREM IPSUM</h1>
        <button className="learn-more">LEARN MORE →</button>
      </div>
      <img
        className="banner"
        src={banner}
        alt="a woman and a child sitting in front of a laptop"
      />
    </div>
  );
};

export default Banner2;
