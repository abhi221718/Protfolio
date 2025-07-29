import React, { useState, useEffect } from "react";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import "./Navbar.css";
import "./Footer.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ErrorBoundary>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer theme={theme} toggleTheme={toggleTheme} />
    </ErrorBoundary>
  );
};

export default App;