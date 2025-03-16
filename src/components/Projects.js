// src/components/Projects.js
import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>Flutter Blog App</li>
        <li>Web Application & E-commerce Dashboard</li>
        <li>Alumni Management System</li>
        <li>Sattva App</li>
        <li>Smart Home (IoT)</li>
        <li>
          Advanced Database Management System for Wolverhampton Royal Hospital
        </li>
        <li>
          <strong>Satrex Company’s Website:</strong>
          <a
            href="https://satrex.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            View Site
          </a>
        </li>
      </ul>
      <p>
        See more on my GitHub:
        <a
          href="https://github.com/meena108"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/meena108
        </a>
      </p>
    </section>
  );
}

export default Projects;
