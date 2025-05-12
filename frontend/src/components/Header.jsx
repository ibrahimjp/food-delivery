import React from 'react'

const Header = () => {
  return (
    <header class="header" data-header>
    <div class="container">

      <h1>
        <a href="#" class="logo">Foodie<span class="span">.</span></a>
      </h1>

      <nav class="navbar" data-navbar>
        <ul class="navbar-list">

          <li class="nav-item">
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li class="nav-item">
            <a href="#about" class="navbar-link" data-nav-link>About Us</a>
          </li>

          <li class="nav-item">
            <a href="#food-menu" class="navbar-link" data-nav-link>Shop</a>
          </li>

          <li class="nav-item">
            <a href="#blog" class="navbar-link" data-nav-link>Blog</a>
          </li>

          <li class="nav-item">
            <a href="#" class="navbar-link" data-nav-link>Contact Us</a>
          </li>

        </ul>
      </nav>

      <div class="header-btn-group">
        <button class="search-btn" aria-label="Search" data-search-btn>
          <ion-icon name="search-outline"></ion-icon>
        </button>

        <button class="btn btn-hover">Reservation</button>

        <button class="nav-toggle-btn" aria-label="Toggle Menu" data-menu-toggle-btn>
          <span class="line top"></span>
          <span class="line middle"></span>
          <span class="line bottom"></span>
        </button>
      </div>

    </div>
  </header>
  )
}

export default Header