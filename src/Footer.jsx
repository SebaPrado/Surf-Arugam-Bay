import React from "react";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="footer-content">
          <p>&copy; 2024 Sebastian Prado. All rights reserved.</p>
          <div className="social-icons">
            <a
              href="https://github.com/SebaPrado"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-prado-b05862281/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/sebastian_prado31/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
