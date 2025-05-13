import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
const Blog = () => {
  return (
    <div>
      <Header />
      <section className="section section-divider white blog" id="blog">
        <div className="container">

          {/* Section Heading */}
          <p className="section-subtitle">Latest Blog Posts</p>
          <h2 className="h2 section-title">
            This Is All About <span className="span">Foods</span>
          </h2>
          <p className="section-text">
            Food is any substance consumed to provide nutritional support for an organism.
          </p>

          {/* Blog List */}
          <ul className="blog-list">

            {/* Blog Item 1 */}
            <li>
              <div className="blog-card">
                <div className="card-banner">
                  <img
                    src="./images/blog-1.jpg"
                    width="600"
                    height="390"
                    loading="lazy"
                    alt="Cheese Pizza Recipes"
                    className="w-100"
                  />
                  <div className="badge">Pizza</div>
                </div>

                <div className="card-content">
                  <div className="card-meta-wrapper">
                    <a href="#" className="card-meta-link">
                      <ion-icon name="calendar-outline"></ion-icon>
                      <time className="meta-info" dateTime="2022-01-01">Jan 01, 2022</time>
                    </a>

                    <a href="#" className="card-meta-link">
                      <ion-icon name="person-outline"></ion-icon>
                      <p className="meta-info">Jonathan Smith</p>
                    </a>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">What Do You Think About Cheese Pizza Recipes?</a>
                  </h3>
                  <p className="card-text">
                    Cheese pizza recipes are classic, simple, and versatile. They serve as a perfect base to experiment with different types of cheese, herbs, and sauces.
                  </p>

                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
                </div>
              </div>
            </li>

            {/* Blog Item 2 */}
            <li>
              <div className="blog-card">
                <div className="card-banner">
                  <img
                    src="./images/blog-2.jpg"
                    width="600"
                    height="390"
                    loading="lazy"
                    alt="Chicken Strips Recipe"
                    className="w-100"
                  />
                  <div className="badge">Burger</div>
                </div>

                <div className="card-content">
                  <div className="card-meta-wrapper">
                    <a href="#" className="card-meta-link">
                      <ion-icon name="calendar-outline"></ion-icon>
                      <time className="meta-info" dateTime="2022-01-01">Jan 01, 2022</time>
                    </a>

                    <a href="#" className="card-meta-link">
                      <ion-icon name="person-outline"></ion-icon>
                      <p className="meta-info">Jonathan Smith</p>
                    </a>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">Making Chicken Strips With New Delicious Ingredients</a>
                  </h3>
                  <p className="card-text">
                    500g chicken breast, cut into strips

                    1 cup buttermilk

                    1 tbsp hot sauce (optional)

                    1 cup flour

                    1/2 cup panko breadcrumbs

                    1/2 cup crushed cornflakes (for extra crunch)

                    1 tsp smoked paprika
                  </p>

                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
                </div>
              </div>
            </li>

            {/* Blog Item 3 */}
            <li>
              <div className="blog-card">
                <div className="card-banner">
                  <img
                    src="./images/blog-3.jpg"
                    width="600"
                    height="390"
                    loading="lazy"
                    alt="Cheesy Pasta Recipe"
                    className="w-100"
                  />
                  <div className="badge">Chicken</div>
                </div>

                <div className="card-content">
                  <div className="card-meta-wrapper">
                    <a href="#" className="card-meta-link">
                      <ion-icon name="calendar-outline"></ion-icon>
                      <time className="meta-info" dateTime="2022-01-01">Jan 01, 2022</time>
                    </a>

                    <a href="#" className="card-meta-link">
                      <ion-icon name="person-outline"></ion-icon>
                      <p className="meta-info">Jonathan Smith</p>
                    </a>
                  </div>

                  <h3 className="h3">
                    <a href="#" className="card-title">Innovative Hot Cheesy Pasta Make Creator Fact</a>
                  </h3>
                  <p className="card-text">
                    Pasta originated in Italy and is traditionally made from durum wheat.

                    Adding cream cheese to pasta sauce creates a rich, creamy texture.

                    Sun-dried tomatoes intensify the flavor of pasta dishes.

                    Parmesan cheese enhances umami and provides a salty, nutty taste.


                  </p>

                  <a href="#" className="btn-link">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </a>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
