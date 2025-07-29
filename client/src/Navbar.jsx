
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebar = () => setSidebarOpen((open) => !open);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <nav className="navbar">
      <h1>My<i>Portfolio</i></h1>
      <button className="sidebar-toggle mobile-only" onClick={handleSidebar} aria-label="Open menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`} onClick={closeSidebar}></div>
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        {sidebarOpen && (
          <button className="close-btn" onClick={closeSidebar} aria-label="Close menu">&times;</button>
        )}
        <ul>
          <li><a href="#hero" onClick={closeSidebar}>Home</a></li>
          <li><a href="#about" onClick={closeSidebar}>About</a></li>
          <li><a href="#projects" onClick={closeSidebar}>Projects</a></li>
          <li><a href="#contact" onClick={closeSidebar}>Contact</a></li>
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
