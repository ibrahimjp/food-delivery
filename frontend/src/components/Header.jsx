import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Hamburger.css'
const Header = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 991);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          {!isMobile && (
            <header className="header" style={{ backgroundColor: "#780B10" }} data-header>
              <div className="container">


                <h1>
                  <NavLink to="/" className="logo">Foodie<span className="span">.</span></NavLink>
                </h1>

                <nav className="navbar" data-navbar>
                  <ul className="navbar-list">
                    <li
                      onClick={() => setMenu("home")}
                      className={`nav-item ${menu === "home" ? "active" : ""}`}
                    >
                      <NavLink to="/" className={(e) => { return e.isActive ? "navbar-link active" : "navbar-link" }} data-nav-link>Home</NavLink>
                    </li>

                    <li
                      onClick={() => setMenu("about")}
                      className={`nav-item ${menu === "about" ? "active" : ""}`}
                    >
                      <NavLink to="/about" className={(e) => { return e.isActive ? "navbar-link active" : "navbar-link" }} data-nav-link>About Us</NavLink>
                    </li>

                    <li
                      onClick={() => setMenu("shop")}
                      className={`nav-item ${menu === "shop" ? "active" : ""}`}
                    >
                      <NavLink to="/shop" className={(e) => { return e.isActive ? "navbar-link active" : "navbar-link" }} data-nav-link>Order</NavLink>
                    </li>

                    <li
                      onClick={() => setMenu("blog")}
                      className={`nav-item ${menu === "blog" ? "active" : ""}`}
                    >
                      <NavLink to="/blog" className={(e) => { return e.isActive ? "navbar-link active" : "navbar-link" }} data-nav-link>Blog</NavLink>
                    </li>

                    <li
                      onClick={() => setMenu("contact")}
                      className={`nav-item ${menu === "contact" ? "active" : ""}`}
                    >
                      <NavLink to="/contact-us" className={(e) => { return e.isActive ? "navbar-link active" : "navbar-link" }} data-nav-link>Contact Us</NavLink>
                    </li>
                  </ul>
                </nav>

                <div className="header-btn-group">
                  <button className="search-btn" aria-label="Search" data-search-btn>
                    <ion-icon name="search-outline"></ion-icon>
                  </button>

                  <button className="nav-toggle-btn" aria-label="Toggle Menu" data-menu-toggle-btn>
                    <span className="line top"></span>
                    <span className="line middle"></span>
                    <span className="line bottom"></span>
                  </button>
                </div>

              </div>
            </header>
          )}

          {isMobile && (
            <nav>
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn mt-3" for="menu__toggle">
                  <span></span>
                </label>

                <ul class="menu__box">
                  <li><NavLink class="menu__item" to="/">Home</NavLink></li>
                  <li><NavLink class="menu__item" to="/about">About</NavLink></li>
                  <li><NavLink class="menu__item" to="/shop">Order</NavLink></li>
                  <li><NavLink class="menu__item" to="/contact-us">Contact Us</NavLink></li>
                </ul>
              
            </nav>
          )}
        </>
      )}
    </>
  );
};

export default Header;
