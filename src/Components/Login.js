import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'userId') setUserId(value);
    if (name === 'password') setPassword(value);
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    const storedUserId = localStorage.getItem('userId');
    const storedPassword = localStorage.getItem('password');

    // Check if entered credentials match stored credentials
    if (userId === storedUserId && password === storedPassword) {
      // Successful login
      navigate('/dashboard');
    } else {
      setError('Invalid Username or Password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={userId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <ReCAPTCHA
            sitekey="6LdGChMqAAAAADpemykUkpz7NOdGO0YfPGSSgaKB"
            onChange={handleRecaptchaChange}
          />
        </div>
        {error && <span className="error">{error}</span>}
        <button type="submit" className="login-button">Send OTP</button>
      </form>
    </div>
  );
};

export default Login;
