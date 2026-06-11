import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Reusing styles where possible
import logo from './assets/logo.png';
import googleIcon from './assets/google.png';
import appleIcon from './assets/apple.png';
import eyeOffIcon from './assets/eye-off.png';
import eyeIcon from './assets/eye.png';

const SignUp = () => {
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
        <h1 className="title">Create Account</h1>
        <p className="subtitle">Join us today! Please enter your details.</p>

        <form className="login-form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>

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
                placeholder="Create a password"
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

          <div className="input-group checkbox-group">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the <Link to="/terms">Terms & Conditions</Link></label>
          </div>

          <button type="submit" className="login-button">Create Account</button>
        </form>

        <div className="divider">
          <span>Or sign up with</span>
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
          Already have an account? <Link to="/login">Login Now</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
