import React from "react";
import "./styles/Global.css";
import Header from "./components/Header";
import Banner1 from "./components/Banner1";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Banner4 from "./components/Banner4";
import Banner5 from "./components/Banner5";
import Footer from "./components/Footer";

const RoosterGrin = () => {
  return (
    <div className="rooster-grin">
      <Header />
      <Banner1 />
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <Banner5 />
      <Footer />
    </div>
  );
};

export default RoosterGrin;
