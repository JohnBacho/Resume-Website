import React from "react";
import "./Footer.css";

export default function Footer () {
    return (
        <div className="box">
            <div className="footer-container">
                <div className="row">
                    <div className="column left">
                        <p className="heading">© 2026 John Bacho</p>
                    </div>
                    <div className="column">
                        <p className="heading">Socials</p>
                        <a className="footer-link" href="#">Uttar Pradesh</a>
                        <a className="footer-link" href="#">Ahemdabad</a>
                        <a className="footer-link" href="#">Indore</a>
                        <a className="footer-link" href="#">Mumbai</a>
                    </div>
                    <div className="column">
                        <p className="heading">Contact</p>
                        <a className="footer-link" href="#">
                            <i className="fab fa-facebook-f"></i>
                            <span className="icon-label">Facebook</span>
                        </a>
                        <a className="footer-link" href="#">
                            <i className="fab fa-instagram"></i>
                            <span className="icon-label">Instagram</span>
                        </a>
                        <a className="footer-link" href="#">
                            <i className="fab fa-twitter"></i>
                            <span className="icon-label">Twitter</span>
                        </a>
                        <a className="footer-link" href="#">
                            <i className="fab fa-youtube"></i>
                            <span className="icon-label">Youtube</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};