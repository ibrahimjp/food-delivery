import React from 'react';
import { IonIcon } from '@ionic/react';
import { checkmarkOutline } from 'ionicons/icons';
import Header from '../components/Header'
import Footer from '../components/Footer'
const About = ({phoneNumber}) => {
  return (
    <div>
      <Header />
      <section className="section section-divider gray about" id="about">
        <div className="container">

          <div className="about-banner">
            <img 
              src="/images/about-banner.png" 
              width="509" 
              height="459" 
              loading="lazy" 
              alt="Burger with Drinks"
              className="w-100 about-img" 
            />

            <img 
              src="/images/sale-shape-red.png" 
              width="216" 
              height="226" 
              alt="get up to 50% off now"
              className="abs-img scale-up-anim" 
            />
          </div>

          <div className="about-content">
            <h2 className="h2 section-title">
              Caferio, Burgers, and Best Pizzas
              <span className="span">in Town!</span>
            </h2>

            <p className="section-text">
            Welcome to Cheesy Bites & More, where every bite tells a story of rich, cheesy goodness! We bring you the finest selection of mouthwatering pizzas, crispy chicken strips, and creamy, flavorful pasta – all crafted to perfection.
            </p>

            <ul className="about-list">
              <li className="about-item">
                <IonIcon icon={checkmarkOutline} />
                <span className="span">Delicious & Healthy Foods</span>
              </li>

              <li className="about-item">
                <IonIcon icon={checkmarkOutline} />
                <span className="span">Tasty Food</span>
              </li>

              <li className="about-item">
                <IonIcon icon={checkmarkOutline} />
                <span className="span">Calling Support</span>
              </li>

              <li className="about-item">
                <IonIcon icon={checkmarkOutline} />
                <span className="span">HomeMade Food</span>
              </li>
            </ul>

            <button className="btn btn-hover">Order Now</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;