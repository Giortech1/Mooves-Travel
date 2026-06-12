import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from './assets/logo.png';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending reset link
    navigate('/success-reset');
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Mooves Logo" className="logo" />
      </div>
      <div className="login-card">
        <h1 className="title">Reset Password</h1>
        <p className="subtitle">Enter your email and we'll send you a link to reset your password.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <button type="submit" className="login-button">Send Reset Link</button>
        </form>

        <p className="signup-link">
          Remember your password? <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
