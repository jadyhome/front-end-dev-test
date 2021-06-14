import React from "react";
import "../styles/Banner4.css";
import banner2 from "../assets/banner-2.jpg";
import ModalBox from "./ModalBox";

const Banner4 = () => {
  return (
    <div className="fourth-banner">
      <div className="lorem4">
        <h1 className="lorem-title">LOREM IPSUM</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Scelerisque eleifend donec pretium vulputate sapien nec sagittis
          aliquam.
        </p>
        <div className="button">
          <ModalBox />
        </div>
      </div>
      <img className="banner-2" src={banner2} alt="a girl smiling" />
    </div>
  );
};

export default Banner4;
