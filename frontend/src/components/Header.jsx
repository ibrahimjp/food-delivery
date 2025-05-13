import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';
import { Link } from 'react-router-dom';
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
                <Link href="/" className="logo">Foodie<span className="span">.</span></Link>
              </h1>

              <nav className="navbar" data-navbar>
                <ul className="navbar-list">
                  <li 
                    onClick={() => setMenu("home")}
                    className={`nav-item ${menu === "home" ? "active" : ""}`} 
                  >
                    <Link href="/" className="navbar-link" data-nav-link>Home</Link>
                  </li>

                  <li 
                    onClick={() => setMenu("about")}
                    className={`nav-item ${menu === "about" ? "active" : ""}`} 
                  >
                    <Link href="/about" className="navbar-link" data-nav-link>About Us</Link>
                  </li>

                  <li 
                    onClick={() => setMenu("shop")}
                    className={`nav-item ${menu === "shop" ? "active" : ""}`} 
                  >
                    <Link href="/shop" className="navbar-link" data-nav-link>Shop</Link>
                  </li>

                  <li 
                    onClick={() => setMenu("blog")}
                    className={`nav-item ${menu === "blog" ? "active" : ""}`} 
                    >
                    <Link href="/blog" className="navbar-link" data-nav-link>Blog</Link>
                  </li>

                  <li 
                    onClick={() => setMenu("contact")}
                    className={`nav-item ${menu === "contact" ? "active" : ""}`} 
                  >
                    <Link href="/contact-us" className="navbar-link" data-nav-link>Contact Us</Link>
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
