import { useState } from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo/Icon */}
        <div className="login-icon">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="15" width="40" height="50" rx="4" fill="#E8E8E8" stroke="#C0C0C0" strokeWidth="2"/>
            <rect x="25" y="20" width="30" height="35" fill="#F5F5F5"/>
            <circle cx="40" cy="45" r="8" fill="#4285F4"/>
            <path d="M35 45 L38 48 L45 41" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="28" y="22" width="4" height="2" fill="#D0D0D0"/>
            <rect x="28" y="26" width="4" height="2" fill="#D0D0D0"/>
            <rect x="28" y="30" width="4" height="2" fill="#D0D0D0"/>
            <rect x="48" y="22" width="4" height="2" fill="#D0D0D0"/>
            <rect x="48" y="26" width="4" height="2" fill="#D0D0D0"/>
            <rect x="48" y="30" width="4" height="2" fill="#D0D0D0"/>
          </svg>
        </div>

        {/* Header */}
        <h1 className="login-title">Welcome Back</h1>
        <h2 className="login-subtitle">Student Login</h2>
        <p className="login-description">Log in to access your certification dashboard.</p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Input */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Student Email</label>
            <div className="input-wrapper">
              <span className="input-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@university.edu"
                className="form-input"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-wrapper">
              <span className="input-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8333 9.16669H4.16667C3.24619 9.16669 2.5 9.91288 2.5 10.8334V16.6667C2.5 17.5872 3.24619 18.3334 4.16667 18.3334H15.8333C16.7538 18.3334 17.5 17.5872 17.5 16.6667V10.8334C17.5 9.91288 16.7538 9.16669 15.8333 9.16669Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.83333 9.16669V5.83335C5.83333 4.72829 6.27232 3.66848 7.05372 2.88708C7.83512 2.10567 8.89493 1.66669 10 1.66669C11.1051 1.66669 12.1649 2.10567 12.9463 2.88708C13.7277 3.66848 14.1667 4.72829 14.1667 5.83335V9.16669" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="form-input"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 10C2.5 10 5 4.16669 10 4.16669C15 4.16669 17.5 10 17.5 10C17.5 10 15 15.8334 10 15.8334C5 15.8334 2.5 10 2.5 10Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61931 11.3807 7.50002 10 7.50002C8.61929 7.50002 7.5 8.61931 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.95 14.95C13.5255 16.0358 11.7904 16.6374 10 16.6667C5 16.6667 2.5 10.8334 2.5 10.8334C3.35636 9.11074 4.52747 7.56723 5.95 6.28335M8.25 4.53335C8.82361 4.39907 9.41092 4.33195 10 4.33335C15 4.33335 17.5 10.1667 17.5 10.1667C17.0078 11.0696 16.4164 11.9182 15.7367 12.6967M11.7667 11.7667C11.5377 12.0123 11.2617 12.2093 10.9552 12.3459C10.6487 12.4826 10.318 12.556 9.98271 12.5619C9.64739 12.5678 9.31429 12.5061 9.00301 12.3803C8.69174 12.2546 8.40878 12.0675 8.17088 11.8296C7.93299 11.5917 7.74583 11.3087 7.62008 10.9975C7.49433 10.6862 7.4326 10.3531 7.43852 10.0178C7.44443 9.68246 7.51784 9.35179 7.65449 9.04532C7.79113 8.73884 7.98816 8.46281 8.23375 8.23385" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2.5 2.5L17.5 17.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="forgot-password-container">
            <a href="#" className="forgot-password-link">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">
            Log In
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.16666 10H15.8333M15.8333 10L10 4.16669M15.8333 10L10 15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Alternative Login */}
        <div className="alternative-login">
          <a href="#" className="faculty-login-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3333 5.83335C13.3333 7.67431 11.841 9.16669 10 9.16669C8.15905 9.16669 6.66667 7.67431 6.66667 5.83335C6.66667 3.9924 8.15905 2.50002 10 2.50002C11.841 2.50002 13.3333 3.9924 13.3333 5.83335Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 11.6667C6.77834 11.6667 4.16667 14.2784 4.16667 17.5H15.8333C15.8333 14.2784 13.2217 11.6667 10 11.6667Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Login as Faculty or Admin
          </a>
        </div>

        {/* Footer Links */}
        <div className="login-footer">
          <p>
            Don't have an account? <a href="#" className="register-link">Register Now</a>
          </p>
          <p className="help-link">
            Need Help? <a href="#">Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}
