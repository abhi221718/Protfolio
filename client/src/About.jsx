import React, { useRef, useState } from "react";
import profileImg from "./assets/2.jpg";

const About = () => {
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

const handleFileChange = async (e) => {
  if (e.target.files && e.target.files[0]) {
    setUploadedFile(e.target.files[0]);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    });
    alert('File uploaded!');
  }
};

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
           <a className="about-btn" href="http://localhost:5000/download-cv" download>Download CV</a>          <button className="about-btn" type="button" onClick={handleUploadClick}>Upload Document</button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.jpg,.png"
          />
        </div>
        {uploadedFile && (
          <div style={{ marginTop: "0.7rem", color: "#ffc72c", fontWeight: 500 }}>
            Uploaded: {uploadedFile.name}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;