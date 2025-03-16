// src/components/Skills.js
import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h2>Skills & Certifications</h2>
      <div className="skills-container">
        <div className="skill-section">
          <h3>Technical Skills</h3>
          <ul>
            <li>Java, Dart, HTML, CSS, JavaScript, Flutter, React, Laravel</li>
            <li>MySQL, Oracle DBMS, SQLite</li>
            <li>Git, GitHub, GitLab</li>
            <li>IoT & Automation (Node-RED)</li>
            <li>Slack, Jira</li>
          </ul>
        </div>
        <div className="skill-section">
          <h3>Soft Skills</h3>
          <ul>
            <li>Communication, Team Work, Leadership</li>
            <li>Creativity, Critical Thinking, Adaptability</li>
            <li>Problem Solving, Collaboration</li>
          </ul>
        </div>
        <div className="skill-section">
          <h3>Certifications</h3>
          <ul>
            <li>IUG Node-RED – IBM (2024)</li>
            <li>
              Goldman Sachs – Software Engineering Job Simulation (Forage, 2024)
            </li>
            <li>
              Lloyds Bank – Technology Engineering Job Simulation (Forage, 2024)
            </li>
            <li>IBM Z Xplore – All-Star Badge (2024)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
