import React from "react";
import "./Contact.css";
import contactImage from "../assets/contact3.jpeg"; // Ensure correct path

function Contact() {
  return (
    <section id="contact">
      <div className="contact-content">
        {/* LEFT: Contact Info and Social Media */}
        <div className="contact-left">
          {/* Title Wrapped in a Div */}
          <div className="contact-title">
            <h1>Contact.</h1>
          </div>

          <p className="intro">
            Get in touch with me via social media or send me an email. I’d love
            to hear from you!
          </p>

          {/* Social Media Icons Grid */}
          <div className="social-icons">
            <div className="social-item gmail">
              <a
                href="https://mail.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png"
                  alt="Gmail"
                />
              </a>
              <span>Gmail</span>
            </div>

            <div className="social-item facebook">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                />
              </a>
              <span>Facebook</span>
            </div>

            <div className="social-item linkedin">
              <a
                href="https://www.linkedin.com/in/meena-chand-74805a214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                  alt="LinkedIn"
                />
              </a>
              <span>LinkedIn</span>
            </div>

            <div className="social-item instagram">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                  alt="Instagram"
                />
              </a>
              <span>Instagram</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Image */}
        <div className="contact-right">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
