import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Footer Top */}
      <div className="footer-top" style={{ backgroundImage: "url('./images/footer-illustration.png')" }}>
        <div className="container">

          {/* Brand Section */}
          <div className="footer-brand">
            <Link to="#" className="logo">FlavourFull Fusion<span className="span">.</span></Link>
            <p className="footer-text">
              Crafted with passion,served with love ❤
            </p>

            {/* Social Links */}
            <ul className="social-list">
              <li>
                <Link to="#" className="social-link" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li>
                <a to="#" className="social-link" aria-label="Linkedin">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <Link to="#" className="social-link" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </li>
              <li>
                <Link to="#" className="social-link" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Info</p>
            </li>
            <li>
              <p className="footer-list-item">+91 8690120453</p>
            </li>
            <li>
              <p className="footer-list-item">jpjamila2@gmail.com</p>
            </li>
            <li>
              <address className="footer-list-item">Rajendra Nagar,
                Near bsnl tower , pratapgarh (raj)</address>
            </li>
          </ul>


          {/* Booking Form */}

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            &copy; 2022 <Link to="#" className="copyright-link">codewithsadee</Link> All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
