import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="footer">

      {/* Footer Top */}
      <div className="footer-top" style={{ backgroundImage: "url('./images/footer-illustration.png')" }}>
        <div className="container">

          {/* Brand Section */}
          <div className="footer-brand">
            <a href="#" className="logo">Foodie<span className="span">.</span></a>
            <p className="footer-text">
              Financial experts support or help you to find out which way you can raise your funds more.
            </p>

            {/* Social Links */}
            <ul className="social-list">
              <li>
                <a href="#" className="social-link" aria-label="Instagram">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link" aria-label="Linkedin">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link" aria-label="Facebook">
                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#" className="social-link" aria-label="Twitter">
                <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Info</p>
            </li>
            <li>
              <p className="footer-list-item">+1 (062) 109-9222</p>
            </li>
            <li>
              <p className="footer-list-item">Info@YourGmail24.com</p>
            </li>
            <li>
              <address className="footer-list-item">153 Williamson Plaza, Maggieberg, MT 09514</address>
            </li>
          </ul>


          {/* Booking Form */}
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            &copy; 2022 <a href="#" className="copyright-link">codewithsadee</a> All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
