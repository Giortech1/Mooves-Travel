/**
 * Composant Google Sign-In
 * À utiliser après l'installation de @react-oauth/google et configuration du Client ID
 */

import { useEffect, useCallback } from 'react';
import { useAuth } from '../hooks/useAuth.jsx';

export const GoogleSignInButton = ({ onSuccess, onError }) => {
  const { loginWithGoogle } = useAuth();

  const handleGoogleResponse = useCallback(
    async (response) => {
      try {
        await loginWithGoogle(response.credential);
        if (onSuccess) onSuccess();
      } catch (error) {
        console.error('Google Sign-In Error:', error);
        if (onError) onError(error);
      }
    },
    [loginWithGoogle, onError, onSuccess]
  );

  const initializeGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleGoogleResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        { theme: 'outline', size: 'large' }
      );
    }
  };

  useEffect(() => {
    // Charger le script Google Sign-In si pas disponible
    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        initializeGoogleSignIn();
      };
    } else {
      initializeGoogleSignIn();
    }
  }, [handleGoogleResponse]);

  return <div id="google-signin-button"></div>;
};

export default GoogleSignInButton;
