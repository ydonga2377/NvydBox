import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { userId, token } = response.data;
      localStorage.setItem('userId', userId);
      localStorage.setItem('token', token);
      setMessage(response.data.message);
      navigate('/');
    } catch (error) {
      setMessage(error.response.data.message || 'Error logging in');
    }
  };

  return (
    <div>
      <section className="login spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Login</h3>
                <form onSubmit={handleLogin}>
                  <div className="input__item">
                    <input
                      type="text"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input__item">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="site-btn">Login Now</button>
                  <a href="/forgot-password" className="primary-btn ml-2">Forgot Password?</a>
                </form>
                <p>{message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login__register">
                <h3>Don’t Have An Account?</h3>
                <a href="/register" className="primary-btn">Register Now</a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
