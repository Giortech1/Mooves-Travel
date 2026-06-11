import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from './assets/logo.png';
import googleIcon from './assets/google.png';
import appleIcon from './assets/apple.png';
import eyeOffIcon from './assets/eye-off.png';
import eyeIcon from './assets/eye.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSocialLogin = (provider) => {
    if (provider === 'google') {
      window.location.href = 'https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin';
    } else if (provider === 'apple') {
      window.location.href = 'https://appleid.apple.com/auth/authorize';
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Mooves Logo" className="logo" />
      </div>
      <div className="login-card">
        <h1 className="title">Login</h1>
        <p className="subtitle">Welcome back! Please enter your details.</p>

        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                required
              />
              <img
                src={showPassword ? eyeIcon : eyeOffIcon}
                alt="Toggle Password"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit" className="login-button">Login</button>
        </form>

        <div className="divider">
          <span>Or login with</span>
        </div>

        <div className="social-login">
          <button className="social-button" onClick={() => handleSocialLogin('google')}>
            <img src={googleIcon} alt="Google" />
            <span>Google</span>
          </button>
          <button className="social-button" onClick={() => handleSocialLogin('apple')}>
            <img src={appleIcon} alt="Apple" />
            <span>Apple</span>
          </button>
        </div>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
