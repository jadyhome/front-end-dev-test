import React from "react";
import "../styles/Global.css";
import whitelogo from "../assets/logo-white.svg";
import hero from "../assets/hero.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="whitelogo"
          src={whitelogo}
          alt="rooster-grin-white-logo"
        />
      </div>

      <div className="header-text">
        <h1 className="welcome-to">WELCOME TO</h1>
        <h1 className="company-name">Rooster Grin</h1>
        <div className="button">
          <button className="hero-button">LEARN MORE</button>
        </div>
      </div>
      <img className="hero-img" src={hero} alt="San Francisco Bridge Sunset" />
    </div>
  );
};

export default Header;
