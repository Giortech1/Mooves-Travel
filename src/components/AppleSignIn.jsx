/**
 * Composant Apple Sign-In
 * À utiliser après configuration des credentials Apple
 */

import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth.jsx';

export const AppleSignInButton = ({ onSuccess, onError }) => {
  const { loginWithApple } = useAuth();

  const initializeAppleSignIn = () => {
    if (window.AppleID) {
      window.AppleID.auth.init({
        clientId: import.meta.env.VITE_APPLE_CLIENT_ID,
        teamId: import.meta.env.VITE_APPLE_TEAM_ID,
        keyId: import.meta.env.VITE_APPLE_KEY_ID,
        redirectURI: window.location.origin,
        scope: ['email', 'name'],
        usePopup: true,
      });
    }
  };

  useEffect(() => {
    // Charger le script Apple Sign-In
    if (!window.AppleID) {
      const script = document.createElement('script');
      script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsappleauth/appleid.auth.js';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        initializeAppleSignIn();
      };
    } else {
      initializeAppleSignIn();
    }
  }, []);

  const handleAppleSignIn = async () => {
    try {
      if (!window.AppleID) {
        throw new Error('Apple ID SDK non chargé');
      }

      const data = await window.AppleID.auth.signIn();

      if (data.authorization) {
        const { identityToken } = data.authorization;
        const userInfo = data.user;

        await loginWithApple(
          identityToken,
          userInfo?.email || '',
          userInfo?.name?.firstName
            ? `${userInfo.name.firstName} ${userInfo.name.lastName || ''}`.trim()
            : 'Apple User'
        );

        if (onSuccess) onSuccess();
      }
    } catch (error) {
      console.error('Apple Sign-In Error:', error);
      if (onError) onError(error);
    }
  };

  return (
    <button
      onClick={handleAppleSignIn}
      style={{
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#000',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
        <path d="M17.05 13.5c-.91 0-1.82.55-2.25 1.51.7.01 1.36.23 1.96.7.37.29.66.64.88 1.04-1.42 1.01-3.55 1.01-4.97 0 .22-.40.51-.75.88-1.04.60-.47 1.26-.69 1.96-.70-.43-.96-1.34-1.51-2.25-1.51zm-1.39-4.89c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm5.64 6.89c1.33.82 2.21 2.27 2.21 3.97 0 2.53-2.04 4.58-4.58 4.58-2.14 0-3.98-1.44-4.4-3.35.97.24 1.97.24 2.94 0 .42 1.91 2.26 3.35 4.4 3.35 2.54 0 4.58-2.04 4.58-4.58 0-1.70-.88-3.15-2.21-3.97z"/>
      </svg>
      Sign in with Apple
    </button>
  );
};

export default AppleSignInButton;
