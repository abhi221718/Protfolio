
import React from "react";

const staticProjects = [
  { title: "Portfolio Website", description: "A personal portfolio website built with React and Vite." },
  { title: "Todo App", description: "A simple todo app with add, edit, and delete features." },
  { title: "Weather App", description: "A weather forecast app using a public API." },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {staticProjects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
