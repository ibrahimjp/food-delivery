import React, { useState } from 'react';
import './LoginPopUp.css';
import axios from 'axios';

const LoginPopUp = ({ url }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/login`, data);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        const returnTo ='/';
        localStorage.removeItem('returnTo');
        window.location.href = returnTo;
      } else {
        alert(`Signup failed: ${response.data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert(`Login failed: ${err.response.data.message}`);
    }
  };

  const onSignup = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const response = await axios.post(`${url}/api/user/register`, data);
      console.log(response);
      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        window.location.href = "/";
      } else {
        alert(`Signup failed: ${response.data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert(`Login failed: ${err.response.data.message}`);
    }
  };

  return (
    <div className="login-pop-up">
      <div className="ring">
        <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i>

        {isLogin ? (
          <form onSubmit={onLogin}>
            <div className="login-form">
              <h2>Login</h2>
              <div className="inputBx">
                <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} required />
              </div>
              <div className="inputBx">
                <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} required />
              </div>
              <div className="inputBx">
                <input type="submit" value="Sign In" />
              </div>
              <div className="links">
                <b>Don't have an account?</b>
                <button type="button" onClick={() => setIsLogin(false)}>Signup</button>
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={onSignup}>
            <div className="signup-form">
              <h2>Signup</h2>
              <div className="inputBx">
                <input type="text" name="username" placeholder="Username" value={data.username} onChange={handleChange} required />
              </div>
              <div className="inputBx">
                <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} required />
              </div>
              <div className="inputBx">
                <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} required />
              </div>
              <div className="inputBx">
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={data.confirmPassword} onChange={handleChange} required />
              </div>
              <div className="inputBx">
                <input type="submit" value="Sign Up" />
              </div>
              <div className="links">
                <b>Already have an account?</b>
                <button type="button" onClick={() => setIsLogin(true)}>Login</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPopUp;
