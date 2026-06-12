# ✅ SignUp et Login - Configuration Complète

## 📝 État Actuel

✅ **Terminé:**
- Login avec email/password → Backend ✓
- SignUp avec email/password → Backend ✓
- Boutons Google et Apple → UI prête ✓
- AuthService et useAuth hook → Intégrés ✓

⏳ **À Faire:**
- Configurer Google Sign-In
- Configurer Apple Sign-In

---

## 🚀 Configuration Google Sign-In (Recommandé pour démarrer)

### 1. Obtenir le Client ID Google

Voir [GOOGLE_APPLE_SIGNIN.md](GOOGLE_APPLE_SIGNIN.md) - Section "Google Sign-In" - Étapes 1-2

### 2. Ajouter à `.env.local`

```env
VITE_GOOGLE_CLIENT_ID=votre_client_id.apps.googleusercontent.com
```

### 3. Installer la librairie

```bash
npm install @react-oauth/google
```

### 4. Mettre à jour `main.jsx`

```javascript
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </GoogleOAuthProvider>
);
```

### 5. Mettre à jour `Login.jsx`

Remplacer la fonction `handleGoogleLogin`:

```javascript
import { GoogleLogin } from '@react-oauth/google';

// Dans le render, remplacer le bouton Google:
<GoogleLogin
  onSuccess={(credentialResponse) => {
    setLoading(true);
    loginWithGoogle(credentialResponse.credential)
      .then(() => navigate('/home'))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }}
  onError={() => setError('Erreur Google')}
  useOneTap
/>
```

### 6. Mettre à jour `SignUp.jsx`

Même chose que Login.jsx - ajouter le même GoogleLogin component.

---

## 🍎 Configuration Apple Sign-In (Plus complexe)

Voir [GOOGLE_APPLE_SIGNIN.md](GOOGLE_APPLE_SIGNIN.md) - Section "Apple Sign-In"

Nécessite:
1. Compte Apple Developer ($99/an)
2. Configuration des credentials
3. Enregistrement du domaine

---

## 🧪 Test Local

### Email/Password (Fonctionne immédiatement)

```bash
# Terminal 1: Backend
cd server
npm run dev

# Terminal 2: Frontend
npm run dev
```

**Test:**
1. Aller à http://localhost:5173/signup
2. Créer un compte:
   - Nom: Test User
   - Email: test@example.com
   - Password: Test123
3. Vérifier que vous êtes redirigé à `/home`

### Google (Après configuration)

1. Sur la page de Login/Signup
2. Cliquer sur "Sign in with Google"
3. Sélectionner votre compte Google
4. Vérifier que vous êtes redirigé à `/home`

---

## 📁 Fichiers Modifiés

| Fichier | Modification |
|---------|--------------|
| `src/Login.jsx` | ✅ Connecté au backend |
| `src/SignUp.jsx` | ✅ Connecté au backend |
| `src/main.jsx` | ✅ AuthProvider ajouté |
| `.env.local` | ✅ VITE_API_URL configuré |
| `src/components/GoogleSignIn.jsx` | ✅ Composant réutilisable |
| `src/components/AppleSignIn.jsx` | ✅ Composant réutilisable |

---

## 🎯 Prochaines Étapes

### Immédiat (15 min)
1. Tester Login/SignUp avec email/password
2. Vérifier que le backend reçoit les requêtes

### Court terme (1-2 jours)
1. Configurer Google Client ID
2. Tester Google Sign-In
3. Implémenter le composant GoogleLogin

### Moyen terme (1-2 semaines)
1. Configurer Apple Sign-In
2. Tester sur iPhone/Mac
3. Déployer en production

---

## 🐛 Troubleshooting

### "useAuth doit être utilisé avec AuthProvider"
✅ Vérifier que `main.jsx` a `<AuthProvider>`

### "VITE_API_URL is undefined"
✅ Vérifier que `.env.local` existe et a la bonne valeur

### Erreur "Impossible de se connecter au backend"
✅ S'assurer que:
- Backend démarré sur le port 5000: `cd server && npm run dev`
- Frontend sur le port 5173: `npm run dev`
- Pas de firewall bloquant

### Google: "Invalid Client"
✅ Vérifier le Client ID dans:
- `.env.local`
- Google Cloud Console - les URI autorisés incluent `http://localhost:5173`

---

## 💾 Base de Données (Firestore)

Lors du premier SignUp/Login, l'utilisateur est auto-créé dans Firestore:

```json
{
  "email": "test@example.com",
  "displayName": "Test User",
  "photoURL": "",
  "authProviders": ["email"],
  "verified": false,
  "createdAt": "2024-06-10T...",
  "lastLogin": "2024-06-10T...",
  "lastLoginProvider": "email"
}
```

---

## 📞 Support

- Email/Password issues: Voir [server/README.md](server/README.md)
- Google/Apple setup: Voir [GOOGLE_APPLE_SIGNIN.md](GOOGLE_APPLE_SIGNIN.md)
- API issues: Voir [API_REFERENCE.md](API_REFERENCE.md)

---

## ✅ Checklist Finale

- [ ] Backend démarré (`cd server && npm run dev`)
- [ ] Frontend démarré (`npm run dev`)
- [ ] SignUp avec email/password fonctionne
- [ ] Login avec email/password fonctionne
- [ ] Utilisateur créé dans Firestore
- [ ] Token JWT généré et stocké
- [ ] Google Client ID obtenu (optionnel)
- [ ] Apple credentials configurés (optionnel)

Vous êtes prêt! 🎉
