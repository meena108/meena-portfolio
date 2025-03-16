// src/components/Skills.js
import React from "react";
import "./Skills.css";
import {
  FaJava,
  FaReact,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaUsers,
  FaAward,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaSlack,
  FaCode,
} from "react-icons/fa";
import { BiLogoFlutter, BiLogoPostgresql } from "react-icons/bi";

// Define Skills Data
const technicalSkills = [
  { icon: <FaJava color="#f89820" />, label: "Java" },
  { icon: <FaReact color="#61DAFB" />, label: "React" },
  { icon: <FaPython color="#3776AB" />, label: "Python" },
  { icon: <FaNodeJs color="#8CC84B" />, label: "Node.js" },
  { icon: <BiLogoFlutter color="#02569B" />, label: "Flutter" },
  { icon: <BiLogoPostgresql color="#336791" />, label: "PostgreSQL" },
  { icon: <FaHtml5 color="#E34F26" />, label: "HTML5" },
  { icon: <FaCss3Alt color="#1572B6" />, label: "CSS3" },
  { icon: <FaGitAlt color="#F1502F" />, label: "Git" },
  { icon: <FaGithub color="#181717" />, label: "GitHub" },
  { icon: <FaSlack color="#4A154B" />, label: "Slack" },
];

const softSkills = [
  { icon: <FaUsers color="#4CAF50" />, label: "Teamwork" },
  { icon: <FaTools color="#FF9800" />, label: "Problem Solving" },
  { icon: <FaDatabase color="#673AB7" />, label: "Analytical Thinking" },
  { icon: <FaAward color="#2196F3" />, label: "Leadership" },
];

const certifications = [
  "IUG Node-RED – IBM (2024)",
  "Goldman Sachs – Software Engineering Job Simulation (Forage, 2024)",
  "Lloyds Bank – Technology Engineering Job Simulation (Forage, 2024)",
  "IBM Z Xplore – All-Star Badge (2024)",
];

function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">💡 Skills & Certifications</h2>

      <div className="skills-layout">
        {/* Technical Skills - Left Side */}
        <div className="skills-section left">
          <h3>
            <FaCode /> Technical Skills
          </h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill.icon}
                <p>{skill.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="skills-divider"></div>

        {/* Soft Skills - Right Side */}
        <div className="skills-section right">
          <h3>
            <FaUsers /> Soft Skills
          </h3>
          <div className="skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill.icon}
                <p>{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications - Centered Below */}
      <div className="certifications-section">
        <h3>
          <FaAward /> Certifications
        </h3>
        <ul className="certifications-list">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
