import React from "react";
import profileImg from "./assets/2.jpg";

const About = () => {
  return (
    <section id="about">
      <div id="about-photo-frame">
        <img src={profileImg} alt="Profile" />
      </div>
      <div id="about-content">
        <h2>About Me</h2>
        <p>
          I'm a frontend developer with a passion for building user-friendly and responsive websites. I have experience with JavaScript, React, HTML, and CSS. I love turning ideas into interactive, modern web experiences.
        </p>
        <div id="about-btns">
          <button className="about-btn">Hire Me</button>
          <button className="about-btn">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default About;