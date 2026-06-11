import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import './Login.css';
import logo from '../assets/logo.png';
import googleIcon from '../assets/google.png';
import appleIcon from '../assets/apple.png';
import eyeOffIcon from '../assets/eye-off.png';
import eyeIcon from '../assets/eye.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  // Gérer le login par email
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(email, password);
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Erreur de connexion');
    } finally {
      setLoading(false);
    }
  };

  // Gérer le login Google
  const handleGoogleLogin = async (response) => {
    setLoading(true);
    setError('');

    try {
      // Supposant que vous avez configuré @react-oauth/google
      await loginWithGoogle(response.credential);
      navigate('/home');
    } catch (err) {
      setError(err.message || 'Erreur Google');
    } finally {
      setLoading(false);
    }
  };

  // Gérer le login Apple
  const handleAppleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      // Vous devrez implémenter le SDK Apple Sign-In
      // Voir: https://developer.apple.com/sign-in-with-apple/
      alert('Implémentation Apple Sign-In requise');
    } catch (err) {
      setError(err.message || 'Erreur Apple');
    } finally {
      setLoading(false);
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

        {/* Message d'erreur */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form className="login-form" onSubmit={handleEmailLogin}>
          {/* Email */}
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {/* Mot de passe */}
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
              />
              <img
                src={showPassword ? eyeIcon : eyeOffIcon}
                alt="Toggle Password"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          {/* Bouton Login */}
          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Connexion en cours...' : 'Login'}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>Or</span>
        </div>

        {/* Social Login */}
        <div className="social-buttons">
          <button
            className="social-button google"
            onClick={handleGoogleLogin}
            disabled={loading}
            type="button"
          >
            <img src={googleIcon} alt="Google" />
            <span>Google</span>
          </button>

          <button
            className="social-button apple"
            onClick={handleAppleLogin}
            disabled={loading}
            type="button"
          >
            <img src={appleIcon} alt="Apple" />
            <span>Apple</span>
          </button>
        </div>

        {/* Liens */}
        <div className="login-links">
          <a href="/forgot-password">Forgot password?</a>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
