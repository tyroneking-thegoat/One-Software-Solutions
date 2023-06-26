import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = () => {
  const images = [
    'https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
    'https://images.unsplash.com/photo-1603102859961-64b17d43580d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
    'https://images.unsplash.com/photo-1621691211095-fe4b38f21788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80',
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform login verification logic here
    if (username === 'your_username' && password === 'your_password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  if (loggedIn) {
    // Redirect to the homepage if the user is logged in
    window.location.href = '/homepage';
  }

  return (
    <div className="login-container">
      <div className="slideshow">
        {images.map((image, index) => (
          <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="login-area">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <div className="login-links">
          <a href="/forgot-password">Forgot Password</a>
          <a href="/create-account">Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
