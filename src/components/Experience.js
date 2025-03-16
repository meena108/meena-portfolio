import React from "react";
import "./Experience.css";
import {
  FaBuilding,
  FaBriefcase,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">💼 Work Experience</h2>
      <div className="timeline">
        {/* Satrex Ltd */}
        <div className="timeline-item">
          <div className="timeline-icon blue">
            <FaLaptopCode />
          </div>
          <div className="timeline-content">
            <h3>Satrex Ltd, Cambridge, UK</h3>
            <p className="job-title">
              <FaBriefcase /> Software Developer
            </p>
            <p className="job-duration">
              <FaCalendarAlt /> May 2024 – Dec 2024
            </p>
            <ul>
              <li>
                🔹 Assisted in website updates and maintaining user information.
              </li>
              <li>🔹 Collaborated on digital transformation projects.</li>
              <li>
                🔹 Created service information, training content, and delivered
                workshops for staff.
              </li>
              <li>
                🔹 <strong>Key Project:</strong> Designed and implemented a
                platform for a UK-based training company.
                <a
                  href="https://satrex.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  View Site <FaExternalLinkAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* University of Wolverhampton */}
        <div className="timeline-item">
          <div className="timeline-icon red">
            <FaBuilding />
          </div>
          <div className="timeline-content">
            <h3>University of Wolverhampton, UK</h3>
            <p className="job-title">
              <FaBriefcase /> International Student Life Digital Ambassador
            </p>
            <p className="job-duration">
              <FaCalendarAlt /> Feb 2024 – Dec 2024
            </p>
            <ul>
              <li>
                🔹 Assisted in website updates and maintained user information.
              </li>
              <li>
                🔹 Designed posters and booklets to promote student life and
                engagement activities.
              </li>
              <li>
                🔹 Audited the website and troubleshot issues for smooth
                functionality.
              </li>
            </ul>
          </div>
        </div>

        {/* Royal Guard Security Services */}
        <div className="timeline-item">
          <div className="timeline-icon green">
            <FaBuilding />
          </div>
          <div className="timeline-content">
            <h3>Royal Guard Security Services Pvt. Ltd, Nepal</h3>
            <p className="job-title">
              <FaBriefcase /> Manager
            </p>
            <p className="job-duration">
              <FaCalendarAlt /> Jan 2022 – May 2023
            </p>
            <ul>
              <li>🔹 Built and launched a fully functional company website.</li>
              <li>
                🔹 Managed IT systems and organized training sessions for staff.
              </li>
              <li>
                🔹 <strong>Key Project:</strong>
                <a
                  href="https://royalguardsecurity.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Visit Site <FaExternalLinkAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Vidinli Software, Germany */}
        <div className="timeline-item">
          <div className="timeline-icon orange">
            <FaCode />
          </div>
          <div className="timeline-content">
            <h3>Vidinli Software, Germany</h3>
            <p className="job-title">
              <FaBriefcase /> Junior Flutter Developer
            </p>
            <p className="job-duration">
              <FaCalendarAlt /> Aug – Nov 2021
            </p>
            <ul>
              <li>
                🔹 Designed, coded, tested, deployed, and maintained Flutter
                applications.
              </li>
              <li>
                🔹 Participated in weekly project reviews with the development
                team and project manager.
              </li>
              <li>
                🔹 Debugged and resolved application issues, ensuring smooth
                functionality.
              </li>
              <li>
                🔹 <strong>Key Project:</strong>
                <a
                  href="https://play.google.com/store/apps/details?id=net.ehcp.online_order_program&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  View App <FaExternalLinkAlt />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
