import React from "react";
import "./Education.css";
import {
  FaGraduationCap,
  FaTrophy,
  FaUniversity,
  FaMedal,
} from "react-icons/fa";
import wlvLogo from "../assets/companylogo.jpg";
import kuLogo from "../assets/ku.png";
import gradPhoto1 from "../assets/contact.jpeg";
import gradPhoto2 from "../assets/contact2.jpeg";

function Education() {
  return (
    <section id="education">
      <h2 className="section-title">🎓 My Education</h2>

      <div className="education-container">
        {/* Left: Graduation Photos */}
        <div className="grad-images">
          <img
            src={gradPhoto1}
            alt="Graduation Ceremony 1"
            className="grad-photo"
          />
          <img
            src={gradPhoto2}
            alt="Graduation Ceremony 2"
            className="grad-photo"
          />
        </div>

        {/* Right: Education Timeline */}
        <div className="education-timeline">
          {/* Master's Degree */}
          <div className="education-card">
            <div className="education-header">
              <img
                src={wlvLogo}
                alt="University of Wolverhampton"
                className="edu-logo"
              />
              <h3>
                <FaUniversity /> Master’s in Computer Science
              </h3>
            </div>
            <p>
              📅 2023 – 2024 | <FaMedal className="icon" /> **Distinction**
            </p>
            <ul>
              <li>
                <FaTrophy className="icon" /> President of Cambridge Wolves
                Society (2024)
              </li>
              <li>
                <FaTrophy className="icon" /> British Computer Society Member
              </li>
            </ul>
          </div>

          {/* Bachelor's Degree */}
          <div className="education-card">
            <div className="education-header">
              <img
                src={kuLogo}
                alt="Kathmandu University"
                className="edu-logo"
              />
              <h3>
                <FaUniversity /> Bachelor’s in Business Information Systems
              </h3>
            </div>
            <p>📅 2011 – 2015 | CGPA: 3.06 / 4.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
