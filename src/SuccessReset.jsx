import { Link } from 'react-router-dom';
import './Login.css';
import logo from './assets/logo.png';
import successImage from './assets/resete succes image.png';

const SuccessReset = () => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Mooves Logo" className="logo" />
      </div>
      <div className="login-card">
        <div className="success-content">
          <img src={successImage} alt="Success" className="success-image" />
          <h1 className="title">Success!</h1>
          <p className="subtitle">Check your email for the reset link we've sent you. If you don't see it, check your spam folder.</p>
        </div>

        <Link to="/login">
          <button className="login-button">Back to Login</button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessReset;
