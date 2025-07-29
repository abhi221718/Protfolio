import React from "react";

import "./Footer.css";

const Footer = ({ theme, toggleTheme }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Abhishek Sharma</p>
        <button className="theme-toggle-btn footer-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Night" : "☀️ Day"}
        </button>
      </div>
    </footer>
  );
};

export default Footer;