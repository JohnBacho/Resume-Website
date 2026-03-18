import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="box">
      <div className="footer-container">
        <div className="row">
          <div className="column left">
            <p className="heading">© 2026 John Bacho</p>
          </div>
          <div className="column">
            <p className="heading">Socials</p>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/johnbacho/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="footer-link"
              href="https://github.com/JohnBacho"
              target="_blank"
            >
              Github
            </a>
            <a
              className="footer-link"
              href="https://www.behance.net/johnbacho"
              target="_blank"
            >
              Bēhance
            </a>
            <a className="footer-link" href="">
              CV
            </a>
          </div>
          <div className="column">
            <p className="heading">Contact</p>
            <a className="footer-link" href="#">
              <i className="fab fa-facebook-f"></i>
              <span className="icon-label">Email</span>
            </a>
            <a className="footer-link" href="#">
              <i className="fab fa-instagram"></i>
              <span className="icon-label">Phone</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
