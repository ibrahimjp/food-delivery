import React from 'react'
import './Preloader.css'

const Preloader = () => {
  return (
    <div id="js-preloader" className="js-preloader">
      <div className="main">
        <div className="loader">
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__bar"></div>
          <div className="loader__ball"></div>
        </div>
      </div>
    </div>
  )
}

export default Preloader