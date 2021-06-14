import React from "react";
import "../styles/Banner1.css";
import hikeimg from "../assets/img-1.jpg";
import ModalBox from "./ModalBox";

const Banner1 = () => {
  return (
    <div className="first-banner">
      <div className="text-area-1">
        <h1 className="lorem-title">LOREM IPSUM</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <div className="button">
          <ModalBox />
        </div>
      </div>
      <img
        className="hike-img"
        src={hikeimg}
        alt="silhouettes of two people hiking"
      />
    </div>
  );
};

export default Banner1;
