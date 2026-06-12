# Guide d'Intégration Frontend-Backend

## 📦 Structure du Projet

```
Mooves-Travel/
├── server/                 # Backend Node.js/Express
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── .env                # Variables d'environnement (à créer)
│   ├── package.json
│   └── index.js
│
├── src/                    # Frontend React
│   ├── services/
│   │   └── AuthService.js  # Service d'authentification
│   ├── hooks/
│   │   └── useAuth.jsx     # Hook personnalisé
│   ├── components/
│   │   └── LoginForm.jsx   # Composant Login amélioré
│   └── ...
│
├── .env.example            # Variables d'environnement frontend
└── package.json
```

## 🚀 Configuration Rapide

### Étape 1: Backend

```bash
# Aller dans le dossier server
cd server

# Installer les dépendances
npm install

# Copier le fichier d'exemple
cp .env.example .env

# Éditer .env avec vos credentials Firebase
# (Voir CONFIGURATION.md)

# Démarrer le serveur
npm run dev
```

Le serveur devrait afficher:
```
✅ Serveur démarré sur http://localhost:5000
```

### Étape 2: Frontend

```bash
# À la racine du projet
cp .env.example .env.local

# Modifier VITE_API_URL si votre backend n'est pas sur localhost:5000

# Installer les dépendances (si nécessaire)
npm install

# Démarrer le frontend
npm run dev
```

### Étape 3: Utiliser dans les Composants

```javascript
import { useAuth } from './hooks/useAuth.jsx';

function MonComposant() {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Bienvenue {user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Vous n'êtes pas connecté</p>
      )}
    </div>
  );
}
```

## 📋 Checklist de Configuration

### Backend
- [ ] Firebase Project créé
- [ ] Credentials Firebase obtenus
- [ ] `.env` configuré avec les credentials
- [ ] `npm install` exécuté
- [ ] Serveur démarré (`npm run dev`)
- [ ] `/health` endpoint fonctionne

### Frontend
- [ ] `.env.local` créé avec `VITE_API_URL`
- [ ] `AuthService.js` intégré
- [ ] `useAuth.jsx` intégré
- [ ] `LoginForm.jsx` intégré
- [ ] Frontend démarré (`npm run dev`)

## 🔗 Intégration du Hook useAuth

### Envelopper l'application

Dans `src/main.jsx`:

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './hooks/useAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
```

### Utiliser dans les composants

```javascript
import { useAuth } from '../hooks/useAuth.jsx'

function Dashboard() {
  const { user, loading, error } = useAuth()

  if (loading) return <div>Chargement...</div>
  if (!user) return <div>Non connecté</div>

  return (
    <div>
      <h1>Bienvenue {user.displayName}</h1>
      <p>Email: {user.email}</p>
    </div>
  )
}
```

## 🛡️ Protéger les Routes

Exemple avec `react-router-dom`:

```javascript
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'

function ProtectedRoute({ element }) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return <div>Chargement...</div>
  
  return isAuthenticated ? element : <Navigate to="/login" />
}

// Utilisation
<Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
```

## 📡 Appels API Personnalisés

Si vous avez besoin d'appeler d'autres endpoints:

```javascript
import AuthService from '../services/AuthService.js'

const token = AuthService.getToken()

fetch('http://localhost:5000/api/custom-endpoint', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
```

## 🐛 Troubleshooting

### "Erreur CORS"
```
Cross-Origin Request Blocked
```
**Solution**: Vérifier que `VITE_API_URL` correspond au port du serveur

### "Token manquant"
```
Accès refusé. Token manquant.
```
**Solution**: Vérifier que le login a réussi et le token est sauvegardé

### "Token expiré"
```
Token invalide ou expiré.
```
**Solution**: Implémenter un refresh token endpoint

## 📚 Ressources

- [Fichier README backend](./server/README.md)
- [Configuration Firebase](./server/CONFIGURATION.md)
- [Exemples d'API](./server/EXEMPLES_REQUETES.md)
- [React Hooks Doc](https://react.dev/reference/react/hooks)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)

## 🎯 Prochaines Étapes

1. ✅ Authentification (Login/Signup)
2. ⏳ Profil utilisateur (GET/UPDATE)
3. ⏳ Voyages (CREATE/READ/UPDATE/DELETE)
4. ⏳ Réservations
5. ⏳ Paiements
6. ⏳ Notifications

## 📞 Support

Pour des questions spécifiques:
- Backend: Voir `server/README.md`
- Configuration: Voir `server/CONFIGURATION.md`
- Exemples: Voir `server/EXEMPLES_REQUETES.md`
