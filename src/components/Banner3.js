import React from "react";
import "../styles/Banner.css";
import expertiseSVG from "../assets/home-expertise.svg";
import hygieneSVG from "../assets/home-hygiene.svg";
import labSVG from "../assets/home-lab.svg";
import retentionSVG from "../assets/home-retention.svg";

const Banner3 = () => {
  return (
    <div className="third-banner">
      <div className="text-area-3">
        <h1>
          LOREM IPSUM <br /> DOLOR SIT AMET
        </h1>
        <p>
          Tortor vitae purus faucibus ornare suspendisse. Risus in hendrerit
          gravida rutrum quisque non tellus orci ac. Ullamcorper dignissim cras
          tincidunt lobortis feugiat. Leo duis ut diam quam nulla porttitor
          massa. Est ante in nibh mauris cursus. Facilisi morbi tempus iaculis
          urna id volutpat. Sit amet luctus venenatis lectus magna fringilla
          urna. Urna molestie at elementum eu facilisis.
        </p>
        <button className="learn-more">LEARN MORE</button>
      </div>
      <div className="svg-container">
        <div className="svg">
          <div className="notepad">
            <img
              className="icon"
              src={expertiseSVG}
              alt="a notepad with pencil svg icon"
            />
            <h4>LOREM</h4>
          </div>
          <div className="mask">
            <img
              className="icon"
              src={hygieneSVG}
              alt="a medical mask svg icon"
            />
            <h4>LOREM IPSUM</h4>
          </div>
          <div className="goggles">
            <img
              className="icon"
              src={labSVG}
              alt="a pair of lab goggles svg icon"
            />
            <h4>LOREM</h4>
          </div>
          <div className="retention">
            <img className="icon" src={retentionSVG} alt="retention svg icon" />
            <h4>LOREM IPSUM</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
