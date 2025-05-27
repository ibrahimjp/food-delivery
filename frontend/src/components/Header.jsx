import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import './Hamburger.css'
const Header = () => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
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

    console.log(window)
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

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
                  <NavLink to="/" className="logo">FlavourFull Fusion<span className="span">.</span></NavLink>
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
                    <li className="nav-item">
                      {isLoggedIn ? (
                        <div className="user-dropdown" style={{ position: 'relative' }}>
                          <FontAwesomeIcon 
                            className='user_icon' 
                            icon={faUser} 
                            onClick={toggleDropdown}
                            style={{ cursor: 'pointer' }}
                          />
                          {showDropdown && (
                            <div className="dropdown-menu" style={{
                              position: 'absolute',
                              top: '100%',
                              right: '0',
                              backgroundColor: 'white',
                              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                              borderRadius: '4px',
                              padding: '8px 0',
                              minWidth: '150px',
                              zIndex: 1000
                            }}>
                              <NavLink to="/orders" className="dropdown-item" style={{
                                display: 'block',
                                padding: '8px 16px',
                                color: '#333',
                                textDecoration: 'none',
                                ':hover': {
                                  backgroundColor: '#f5f5f5'
                                }
                              }}>My Orders</NavLink>
                              <button onClick={handleSignOut} className="dropdown-item" style={{
                                display: 'block',
                                width: '100%',
                                padding: '8px 16px',
                                border: 'none',
                                backgroundColor: 'transparent',
                                textAlign: 'left',
                                cursor: 'pointer',
                                color: '#333',
                                ':hover': {
                                  backgroundColor: '#f5f5f5'
                                }
                              }}>Sign Out</button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <NavLink to="/login" className="navbar-link" data-nav-link>
                          <FontAwesomeIcon className='user_icon' icon={faCircleUser} />
                        </NavLink>
                      )}
                    </li>
                  </ul>
                </nav>


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
              {isLoggedIn ? (
                <div className="user-dropdown " style={{ position: 'relative' }}>
                  <FontAwesomeIcon 
                    icon={faUser} 
                    className='user_icon' 
                    onClick={toggleDropdown}
                    style={{ cursor: 'pointer', position: 'absolute', top: '0px', right: '8px', color: '#000', fontSize: '2.5rem' }}
                  />
                  {showDropdown && (
                    <div className="dropdown-menu" style={{
                      position: 'absolute',
                      top: '100%',
                      right: '0',
                      backgroundColor: 'white',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                      borderRadius: '4px',
                      padding: '8px 0',
                      minWidth: '150px',
                      zIndex: 1000
                    }}>
                      <NavLink to="/orders" className="dropdown-item" style={{
                        display: 'block',
                        padding: '8px 16px',
                        color: '#333',
                        textDecoration: 'none',
                        ':hover': {
                          backgroundColor: '#f5f5f5'
                        }
                      }}>My Orders</NavLink>
                      <button onClick={handleSignOut} className="dropdown-item" style={{
                        display: 'block',
                        width: '100%',
                        padding: '8px 16px',
                        border: 'none',
                        backgroundColor: 'transparent',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: '#333',
                        ':hover': {
                          backgroundColor: '#f5f5f5'
                        }
                      }}>Sign Out</button>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink to="/login" className="menu__item mobile-login">
                  <FontAwesomeIcon className='user_icon' icon={faCircleUser}/>
                </NavLink>
              )}
            </nav>
          )}
        </>
      )}
    </>
  );
};

export default Header;
