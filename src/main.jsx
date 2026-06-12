import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './hooks/AuthProvider.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
const root = createRoot(document.getElementById('root'))

const appTree = (
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
)

if (!googleClientId) {
  console.warn('VITE_GOOGLE_CLIENT_ID is not set. Google OAuth is disabled.')
}

root.render(
  googleClientId ? (
    <GoogleOAuthProvider clientId={googleClientId}>
      {appTree}
    </GoogleOAuthProvider>
  ) : (
    appTree
  ),
)
