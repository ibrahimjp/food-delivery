import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';

const Header = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState("home");

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
          <header className="header" style={{ backgroundColor: "#780B10" }} data-header>
            <div className="container">

              <h1>
                <a href="/" className="logo">Foodie<span className="span">.</span></a>
              </h1>

              <nav className="navbar" data-navbar>
                <ul className="navbar-list">
                  <li 
                    onClick={() => setMenu("home")}
                    className={`nav-item ${menu === "home" ? "active" : ""}`} 
                  >
                    <a href="/" className="navbar-link" data-nav-link>Home</a>
                  </li>

                  <li 
                    onClick={() => setMenu("about")}
                    className={`nav-item ${menu === "about" ? "active" : ""}`} 
                  >
                    <a href="/about" className="navbar-link" data-nav-link>About Us</a>
                  </li>

                  <li 
                    onClick={() => setMenu("shop")}
                    className={`nav-item ${menu === "shop" ? "active" : ""}`} 
                  >
                    <a href="/shop" className="navbar-link" data-nav-link>Shop</a>
                  </li>

                  <li 
                    onClick={() => setMenu("blog")}
                    className={`nav-item ${menu === "blog" ? "active" : ""}`} 
                    >
                    <a href="/blog" className="navbar-link" data-nav-link>Blog</a>
                  </li>

                  <li 
                    onClick={() => setMenu("contact")}
                    className={`nav-item ${menu === "contact" ? "active" : ""}`} 
                  >
                    <a href="/contact-us" className="navbar-link" data-nav-link>Contact Us</a>
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
        </>
      )}
    </>
  );
};

export default Header;
