import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section className="section section-divider gray banner">
        <div className="container">

          {/* Banner List */}
          <ul className="banner-list">

            {/* Large Banner Item */}
            <li className="banner-item banner-lg">
              <div className="banner-card">
                <img 
                  src="./images/banner-1.jpg" 
                  width="550" 
                  height="450" 
                  loading="lazy"
                  alt="Discount For Delicious Tasty Burgers!" 
                  className="banner-img" 
                />

                <div className="banner-item-content">
                  <p className="banner-subtitle">50% Off Now!</p>
                  <h3 className="banner-title">Discount For Delicious Tasty Burgers!</h3>
                  <p className="banner-text">Sale off 50% only this week</p>
                  <button className="ui-button">Contact Us</button>
                </div>Contact Us
              </div>
            </li>

            {/* Small Banner Item - Pizza */}
            <li className="banner-item banner-sm">
              <div className="banner-card">
                <img 
                  src="./images/banner-2.jpg" 
                  width="550" 
                  height="465" 
                  loading="lazy" 
                  alt="Delicious Pizza - 50% Off" 
                  className="banner-img" 
                />

                <div className="banner-item-content">
                  <h3 className="banner-title">Delicious Pizza</h3>
                  <p className="banner-text">50% off Now</p>
                  <button className="ui-button">Contact Us</button>
                </div>
              </div>
            </li>

            {/* Small Banner Item - American Burgers */}
            <li className="banner-item banner-sm">
              <div className="banner-card">
                <img 
                  src="./images/banner-3.jpg" 
                  width="550" 
                  height="465" 
                  loading="lazy" 
                  alt="American Burgers - 50% Off" 
                  className="banner-img" 
                />

                <div className="banner-item-content">
                  <h3 className="banner-title">American Burgers</h3>
                  <p className="banner-text">50% off Now</p>
                  <button className="ui-button">Contact Us</button>
                </div>
              </div>
            </li>

            {/* Medium Banner Item - Buzzed Pizza */}
            <li className="banner-item banner-md">
              <div className="banner-card">
                <img 
                  src="./images/banner-4.jpg" 
                  width="550" 
                  height="220" 
                  loading="lazy" 
                  alt="Tasty Buzzed Pizza - 50% Off" 
                  className="banner-img" 
                />

                <div className="banner-item-content">
                  <h3 className="banner-title">Tasty Buzzed Pizza</h3>
                  <p className="banner-text">Sale off 50% only this week</p>
                 <Link to="/contact">
                  <button className="ui-button">Contact Us</button>
                  </Link> 
                </div>
              </div>
            </li>

          </ul>
        </div>
      </section>
    </div>
  );
};

export default Banner;
