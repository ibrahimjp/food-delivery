import React from 'react'
import './Preloader.css'

const Preloader = () => {
  return (
    <div className="preloader">
      <svg className="circular" viewBox="25 25 50 50">
        <circle 
          className="path" 
          cx="50" 
          cy="50" 
          r="20" 
          fill="none" 
          strokeWidth="3" 
          strokeMiterlimit="10"
          stroke="#780B10"
        />
      </svg>
    </div>
  )
}

export default Preloader 