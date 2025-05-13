import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";  // Import the CSS file

const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Contact = () => {
  return (
    <>
    <div className="contact-container">
      <Header />

      <motion.div
        className="contact-content"
        initial="hidden"
        animate="visible"
        variants={contactVariants}
        >
        <h1 className="contact-title">Get In Touch</h1>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
              <FaPhone className="contact-icon" />
              <h2 className="contact-heading">Phone</h2>
              <p>+1 (062) 109-9222</p>
            </motion.div>

            <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
              <FaEnvelope className="contact-icon" />
              <h2 className="contact-heading">Email</h2>
              <p>info@YourGmail24.com</p>
            </motion.div>

            <motion.div className="contact-card" whileHover={{ scale: 1.05 }}>
              <FaMapMarkerAlt className="contact-icon" />
              <h2 className="contact-heading">Address</h2>
              <p>153 Williamson Plaza, Maggieberg, MT 09514</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h2 className="form-title">Send a Message</h2>

            <div className="form-group">
              <input type="text" placeholder="Your Name" className="form-input" required />
              <input type="email" placeholder="Your Email" className="form-input" required />
              <textarea placeholder="Your Message" className="form-textarea" required rows="5"></textarea>

              <motion.button
                className="form-button"
                whileHover={{ scale: 1.05 }}
                type="submit"
                >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>

    </div>
      <Footer />
                </>
  );
};

export default Contact;
