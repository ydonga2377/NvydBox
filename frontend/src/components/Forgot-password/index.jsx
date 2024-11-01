import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message || 'Error sending email');
    }
  };

  return (
    <div>
      <section className="login spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Forgot Password</h3>
                <form onSubmit={handleForgotPassword}>
                  <div className="input__item">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="site-btn">Send Reset Link</button>
                </form>
                <p>{message}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login__register">
                <h3>Already Have An Account?</h3>
                <a href="/signin" className="primary-btn">Login Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
