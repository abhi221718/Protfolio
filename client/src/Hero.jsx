import React from "react";
import heroImg from "./assets/Photograph.jpg"; // ya apni image ka path

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I’m Abhishek Sharma</h1>
          <p>I’m a frontend developer</p>
        </div>
        <div className="hero-img-wrapper">
          <span className="hero-img-ring"></span>
          <img src={heroImg} alt="Hero profile" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;