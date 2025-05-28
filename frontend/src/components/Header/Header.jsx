import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import LoginPopUp from '../LoginPopUp/LoginPopUp'
import { toast } from 'react-hot-toast'

const Header = () => {
  const [menu, setMenu] = useState("home")
  const [showLogin, setShowLogin] = useState(false)
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    setToken("")
    toast.success('Logged out successfully')
    navigate('/')
  }

  return (
    <div className='header'>
      <div className="header-left">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <p>Home</p>
        </Link>
        <Link to='/shop' onClick={() => setMenu("shop")} className={menu === "shop" ? "active" : ""}>
          <p>Shop</p>
        </Link>
        <Link to='/about' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
          <p>About</p>
        </Link>
        <Link to='/contact' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
          <p>Contact</p>
        </Link>
      </div>
      <div className="header-right">
        <div className="header-right-cart">
          <Link to='/cart' onClick={() => setMenu("cart")} className={menu === "cart" ? "active" : ""}>
            <img src="/images/cart.png" alt="" />
            <div className="cart-count">{getTotalCartAmount()}</div>
          </Link>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)} className="login-btn">Login</button>
        ) : (
          <div className="header-right-user">
            <button onClick={logout} className="logout-btn">Logout</button>
          </div>
        )}
      </div>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
    </div>
  )
}

export default Header 