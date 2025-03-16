import React from "react";
import "./About.css";
import aboutImage from "../assets/meena2.PNG"; // Ensure correct path

function About() {
  return (
    <section id="about">
      <div className="about-container">
        {/* Left: About Info */}
        <div className="about-info">
          <h1>About.</h1>
          <p>
            I am a passionate IT professional specializing in User Experience
            Design, IT Management, and Digital Transformation. I love building
            intuitive web & mobile applications, managing IT systems, and
            working on cutting-edge technologies like IoT Smart Homes.
          </p>
          <p>
            Currently, I hold an IBM Z Xplore All-Star Badge and Node-RED
            Certification, showcasing my analytical thinking, problem-solving,
            and leadership skills.
          </p>

          {/* Action Links */}
          <div className="about-links">
            <a
              href="https://www.linkedin.com/in/meena-chand-74805a214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/meena108"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.researchgate.net/profile/Meena-Chand/research"
              target="_blank"
              rel="noopener noreferrer"
            >
              Research
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="about-image">
          <img src={aboutImage} alt="Meena Chand" />
        </div>
      </div>
    </section>
  );
}

export default About;
