import React from 'react';

const Delivery = ({phoneNumber}) => {
  return (
    <div>
      <section className="section section-divider gray delivery">
        <div className="container">

          <div className="delivery-content">
            <h2 className="h2 section-title">
              A Moments Of Delivered On <span className="span">Right Time</span> & Place
            </h2>

            <p className="section-text">
             
            </p>

            <button onClick={() => window.location.href = `tel:${phoneNumber}`} className="btn btn-hover">Order Now</button>
          </div>

          <figure className="delivery-banner">
            <img 
              src="./images/delivery-banner-bg.png" 
              width="700" 
              height="602" 
              loading="lazy" 
              alt="Clouds background" 
              className="w-100" 
            />

            <img 
              src="./images/delivery-boy.svg" 
              width="1000" 
              height="880" 
              loading="lazy" 
              alt="Delivery boy illustration" 
              className="w-100 delivery-img" 
              data-delivery-boy="true" 
            />
          </figure>

        </div>
      </section>
    </div>
  );
};

export default Delivery;
