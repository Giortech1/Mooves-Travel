# 🔐 Guide d'Intégration Google et Apple Sign-In

## 🟢 Google Sign-In

### Étape 1: Installer la librairie

```bash
npm install @react-oauth/google
```

### Étape 2: Obtenir les credentials Google

1. Aller à [Google Cloud Console](https://console.cloud.google.com/)
2. Créer un nouveau projet
3. Aller à **APIs & Services** > **Credentials**
4. Cliquer sur **+ Create Credentials** > **OAuth 2.0 Client ID**
5. Choisir **Web application**
6. Ajouter les URI autorisés:
   - `http://localhost:5173`
   - `http://localhost:3000` (si utilisé)
   - Votre domain en production
7. Copier le **Client ID**

### Étape 3: Ajouter à `.env.local`

```env
VITE_GOOGLE_CLIENT_ID=your_client_id_here
```

### Étape 4: Mettre à jour `main.jsx`

```javascript
import { GoogleOAuthProvider } from '@react-oauth/google';

<GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
  <AuthProvider>
    <App />
  </AuthProvider>
</GoogleOAuthProvider>
```

### Étape 5: Mettre à jour `Login.jsx`

```javascript
import { GoogleLogin } from '@react-oauth/google';

// Dans le formulaire:
<GoogleLogin
  onSuccess={handleGoogleSuccess}
  onError={handleGoogleError}
/>

// Fonction de callback:
const handleGoogleSuccess = async (credentialResponse) => {
  setLoading(true);
  try {
    await loginWithGoogle(credentialResponse.credential);
    navigate('/home');
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

const handleGoogleError = () => {
  setError('Erreur lors de la connexion Google');
};
```

---

## 🍎 Apple Sign-In

### Étape 1: Enregistrer le domaine Apple

1. Aller à [Apple Developer](https://developer.apple.com/)
2. Accéder à **Certificates, Identifiers & Profiles**
3. Aller à **More** > **Configure** (Sign in with Apple)
4. Ajouter votre domaine:
   - `localhost` (dev)
   - Votre domain (production)

### Étape 2: Créer un App ID

1. Aller à **Identifiers** dans Apple Developer
2. Créer un nouvel **App ID**
3. Activer **Sign in with Apple**
4. Sauvegarder

### Étape 3: Créer une clé privée

1. Aller à **Keys** dans Apple Developer
2. Créer une nouvelle **Key**
3. Activer **Sign in with Apple**
4. Télécharger et sauvegarder la clé

### Étape 4: Ajouter à `index.html`

```html
<script
  src="https://appleid.cdn-apple.com/appleauth/static/jsappleauth/appleid.auth.js"
  async
  defer
></script>
```

### Étape 5: Mettre à jour `Login.jsx`

```javascript
const handleAppleSignUp = async () => {
  if (window.AppleID) {
    try {
      window.AppleID.auth.init({
        clientId: import.meta.env.VITE_APPLE_CLIENT_ID,
        teamId: import.meta.env.VITE_APPLE_TEAM_ID,
        redirectURI: window.location.origin + '/login',
        scope: ['email', 'name'],
        usePopup: true,
      });

      const data = await window.AppleID.auth.signIn();
      const { identityToken, user } = data.authorization;

      await loginWithApple(
        identityToken,
        user?.email,
        user?.name?.firstName + ' ' + user?.name?.lastName
      );
      navigate('/home');
    } catch (error) {
      setError('Erreur Apple Sign-In: ' + error.message);
    }
  } else {
    alert('Apple Sign-In SDK not loaded');
  }
};
```

### Étape 6: Ajouter aux variables d'environnement

```env
VITE_APPLE_CLIENT_ID=your_bundle_id_here
VITE_APPLE_TEAM_ID=your_team_id_here
VITE_APPLE_KEY_ID=your_key_id_here
```

---

## 📋 Configuration Complète `.env.local`

```env
# API
VITE_API_URL=http://localhost:5000/api

# Google OAuth
VITE_GOOGLE_CLIENT_ID=xxx.apps.googleusercontent.com

# Apple OAuth
VITE_APPLE_CLIENT_ID=com.mooves.app
VITE_APPLE_TEAM_ID=XXX
VITE_APPLE_KEY_ID=XXX
```

---

## 🧪 Test

### Google
1. Démarrer l'app
2. Cliquer sur **Login** > **Google**
3. Sélectionner un compte Google
4. Vérifier que le token est envoyé au backend

### Apple
1. Sur un appareil Apple
2. Cliquer sur **Login** > **Apple**
3. Autoriser l'accès
4. Vérifier que le token est envoyé au backend

---

## 🐛 Troubleshooting

### Google erreur: "Invalid Client"
- Vérifier le Client ID dans `.env.local`
- Vérifier les URI autorisés dans Google Cloud

### Apple erreur: "Origin not allowed"
- Ajouter votre domain à Apple Developer
- Attendre 10-15 minutes pour la propagation

### Token non reçu au backend
- Vérifier les logs du navigateur (F12)
- Vérifier que le backend écoute sur 5000
- Tester avec cURL: `curl http://localhost:5000/health`

---

## 📚 Documentation

- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Apple Sign In Documentation](https://developer.apple.com/sign-in-with-apple/)
- [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google)

---

## ✅ Checklist

- [ ] Google Client ID obtenu
- [ ] Google Client ID ajouté à `.env.local`
- [ ] Apple Bundle ID enregistré
- [ ] Apple credentials configurés
- [ ] Libraries installées (`npm install`)
- [ ] Frontend et backend démarrés
- [ ] Test de connexion réussi
