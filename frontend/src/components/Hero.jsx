import React from "react";

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url('./images/hero-bg.jpg')` }}
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">Eat Sleep And</p>

          <h2 className="h1 hero-title">Super delicious Burger in town!</h2>

          <p className="hero-text">
            Food is any substance consumed to provide nutritional support for an organism.
          </p>

          <button className="btn">Book A Table</button>
        </div>

        <figure className="hero-banner">
          <img
            src="./images/hero-banner-bg.png"
            width="820"
            height="716"
            alt=""
            aria-hidden="true"
            className="w-100 hero-img-bg"
          />

          <img
            src="./images/hero-banner.png"
            width="700"
            height="637"
            loading="lazy"
            alt="Burger"
            className="w-100 hero-img"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
