import { useState, useEffect } from 'react';
import AuthContext from './AuthContext.jsx';
import AuthService from '../services/AuthService.js';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const currentUser = await AuthService.getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      setError(null);
      const data = await AuthService.loginWithEmail(email, password);
      setUser(data.user);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const signup = async (email, password, displayName) => {
    try {
      setError(null);
      const data = await AuthService.signupWithEmail(email, password, displayName);
      setUser(data.user);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const loginWithGoogle = async (idToken) => {
    try {
      setError(null);
      const data = await AuthService.loginWithGoogle(idToken);
      setUser(data.user);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const loginWithApple = async (idToken, email, fullName) => {
    try {
      setError(null);
      const data = await AuthService.loginWithApple(idToken, email, fullName);
      setUser(data.user);
      return data;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const logout = async () => {
    try {
      setError(null);
      await AuthService.logout();
      setUser(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    loginWithGoogle,
    loginWithApple,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
