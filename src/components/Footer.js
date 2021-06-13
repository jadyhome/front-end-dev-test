import React from "react";
import "../styles/Footer.css";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Follow Us:</h2>
      <div className="social-media">
        <a
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="sm-icons" src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="sm-icons" src={facebook} alt="facebook" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
