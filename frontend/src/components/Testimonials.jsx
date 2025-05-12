import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section className="section section-divider white testi">
        <div className="container">

          {/* Section Header */}
          <header className="section-header">
            <p className="section-subtitle">Testimonials</p>
            <h2 className="h2 section-title">
              Our Customers <span className="span">Reviews</span>
            </h2>
            <p className="section-text">
              Food is any substance consumed to provide nutritional support for an organism.
            </p>
          </header>

          {/* Testimonials List */}
          <ul className="testi-list has-scrollbar">
            
            {/* Testimonial Item 1 */}
            <li className="testi-item">
              <div className="testi-card">
                <div className="profile-wrapper">
                  <figure className="avatar">
                    <img 
                      src="./images/avatar-1.jpg" 
                      width="80" 
                      height="80" 
                      loading="lazy" 
                      alt="Robert William - CEO of Kingfisher" 
                    />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Robert William</h3>
                    <p className="testi-title">CEO, Kingfisher</p>
                  </div>
                </div>

                <blockquote className="testi-text">
                  "I would be lost without this restaurant. I would like to personally thank you for your outstanding service."
                </blockquote>

                <div className="rating-wrapper">
                  {[...Array(5)].map((_, index) => (
                    <ion-icon key={index} name="star"></ion-icon>
                  ))}
                </div>
              </div>
            </li>

            {/* Testimonial Item 2 */}
            <li className="testi-item">
              <div className="testi-card">
                <div className="profile-wrapper">
                  <figure className="avatar">
                    <img 
                      src="./images/avatar-2.jpg" 
                      width="80" 
                      height="80" 
                      loading="lazy" 
                      alt="Thomas Josef - CEO of Getforce" 
                    />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Thomas Josef</h3>
                    <p className="testi-title">CEO, Getforce</p>
                  </div>
                </div>

                <blockquote className="testi-text">
                  "The restaurant has exceeded my expectations. Excellent quality and quick delivery!"
                </blockquote>

                <div className="rating-wrapper">
                  {[...Array(5)].map((_, index) => (
                    <ion-icon key={index} name="star"></ion-icon>
                  ))}
                </div>
              </div>
            </li>

            {/* Testimonial Item 3 */}
            <li className="testi-item">
              <div className="testi-card">
                <div className="profile-wrapper">
                  <figure className="avatar">
                    <img 
                      src="./images/avatar-3.jpg" 
                      width="80" 
                      height="80" 
                      loading="lazy" 
                      alt="Charles Richard - CEO of Angela" 
                    />
                  </figure>

                  <div>
                    <h3 className="h4 testi-name">Charles Richard</h3>
                    <p className="testi-title">CEO, Angela</p>
                  </div>
                </div>

                <blockquote className="testi-text">
                  "Outstanding food quality and excellent customer service. Highly recommend!"
                </blockquote>

                <div className="rating-wrapper">
                  {[...Array(5)].map((_, index) => (
                    <ion-icon key={index} name="star"></ion-icon>
                  ))}
                </div>
              </div>
            </li>

          </ul>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
