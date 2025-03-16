import React from "react";
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Flutter Blog App",
    description: "A fully responsive blog app built with Flutter and Firebase.",
    link: "",
  },
  {
    title: "Web Application & E-commerce Dashboard",
    description: "An admin dashboard for managing an e-commerce platform.",
    link: "",
  },
  {
    title: "Alumni Management System",
    description:
      "A platform for alumni to connect, share updates, and mentor students.",
    link: "",
  },
  {
    title: "Sattva App",
    description:
      "A mobile application that promotes mindfulness and self-care practices.",
    link: "",
  },
  {
    title: "Smart Home (IoT)",
    description:
      "An IoT-based smart home system that automates household devices.",
    link: "",
  },
  {
    title: "Advanced Database System for Wolverhampton Royal Hospital",
    description:
      "A database system for managing patient records and hospital data efficiently.",
    link: "",
  },
  {
    title: "Satrex Company’s Website",
    description:
      "Designed and developed a professional website for Satrex Ltd.",
    link: "https://satrex.co.uk/",
  },
  {
    title: "Node-RED - Brewery Challenge Project by IBM",
    description:
      "Developed an automation workflow using Node-RED for the Brewery Challenge hosted by IBM.",
    github: "https://github.com/meena108",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">🚀 My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-demo"
                  >
                    View Project <FaExternalLinkAlt />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    View on GitHub <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Single GitHub Button for All Projects */}
      <div className="github-button">
        <a
          href="https://github.com/meena108"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> View All Projects on GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
