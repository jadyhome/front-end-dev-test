import React from "react";
import "../styles/Banner3.css";
import expertiseSVG from "../assets/home-expertise.svg";
import hygieneSVG from "../assets/home-hygiene.svg";
import labSVG from "../assets/home-lab.svg";
import calendarSVG from "../assets/home-retention.svg";
import ModalBox from "./ModalBox";

const Banner3 = () => {
  return (
    <div className="third-banner">
      <div className="text-area-3">
        <h1 className="lorem-title">
          LOREM IPSUM <br /> DOLOR SIT AMET
        </h1>
        <p>
          Tortor vitae purus faucibus ornare suspendisse. Risus in hendrerit
          gravida rutrum quisque non tellus orci ac. Ullamcorper dignissim cras
          tincidunt lobortis feugiat.
        </p>
        <div className="button">
          <ModalBox />
        </div>
      </div>
      <div className="svg-container">
        <div className="svg">
          <div className="notepad">
            <a
              href="https://www.health.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="icon"
                src={expertiseSVG}
                alt="a notepad with pencil svg icon"
              />
            </a>
            <h4>LOREM</h4>
          </div>
          <div className="mask">
            <a
              href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="icon"
                src={hygieneSVG}
                alt="a medical mask svg icon"
              />
            </a>
            <h4>LOREM IPSUM</h4>
          </div>
          <div className="goggles">
            <a
              href="https://www.sciencemag.org/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="icon"
                src={labSVG}
                alt="a pair of lab goggles svg icon"
              />
            </a>
            <h4>LOREM IPSUM</h4>
          </div>
          <div className="retention">
            <a
              href="https://www.timeanddate.com/calendar/monthly.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="icon" src={calendarSVG} alt="calendar svg icon" />
            </a>
            <h4>LOREM</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
