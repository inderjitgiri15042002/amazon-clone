import React from "react";
import banner from "../assets/banner.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <img src={banner} className="hero_image" alt="Amazon Banner" />
    </div>
  );
};

export default Home;
