import React from "react";
import "../styles/Banner2.css";
import banner from "../assets/banner-1.jpg";
import ModalBox from "./ModalBox";

const Banner2 = () => {
  return (
    <div className="second-banner">
      <div className="lorem2">
        <h1 className="lorem-title">LOREM IPSUM</h1>
        <div className="button">
          <ModalBox />
        </div>
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
