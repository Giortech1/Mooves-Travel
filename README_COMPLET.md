# 🛫 Mooves Travel - Application Complète

Application de gestion de voyages avec Frontend React et Backend Node.js/Firebase.

## 📁 Structure du Projet

```
Mooves-Travel/
├── server/                      # Backend Node.js/Express
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── index.js
│   ├── package.json
│   ├── .env                     # À créer (credentials Firebase)
│   └── README.md
│
├── src/                         # Frontend React/Vite
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── index.html
├── package.json
├── vite.config.js
├── .env.local                   # À créer (VITE_API_URL)
│
├── CONFIGURATION.md             # Setup Firebase
├── INTEGRATION.md               # Integration guide
├── API_REFERENCE.md             # Endpoints documentation
├── RESUME_IMPLEMENTATION.md     # Summary
├── setup.sh                     # Setup script (Linux/Mac)
├── setup.bat                    # Setup script (Windows)
└── README.md                    # Ce fichier
```

## 🚀 Démarrage Rapide

### Option 1: Script Automatique (Recommandé)

#### Windows:
```bash
setup.bat
```

#### Linux/Mac:
```bash
chmod +x setup.sh
./setup.sh
```

### Option 2: Manuel

**Terminal 1 - Backend:**
```bash
cd server
npm install
cp .env.example .env
# Éditer .env avec Firebase credentials
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm install
npm run dev
```

## 📡 Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Frontend (React + Vite)                                │
│  - Port: 5173                                           │
│  - Services: AuthService.js                             │
│  - Hooks: useAuth()                                     │
└──────────────────┬──────────────────────────────────────┘
                   │ HTTP/REST
                   ↓
┌─────────────────────────────────────────────────────────┐
│  Backend (Express.js)                                   │
│  - Port: 5000                                           │
│  - Routes: /api/auth/*                                  │
│  - Auth: JWT + Firebase                                 │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ↓
┌─────────────────────────────────────────────────────────┐
│  Firebase                                               │
│  - Authentication (Email, Google, Apple)                │
│  - Firestore Database                                   │
└─────────────────────────────────────────────────────────┘
```

## 🔐 Authentification

Trois méthodes supportées:

1. **Email/Mot de passe**
   - Signup: POST `/api/auth/signup`
   - Login: POST `/api/auth/login`

2. **Google Sign-In**
   - Endpoint: POST `/api/auth/google`
   - Auth Flow: OAuth 2.0 via Firebase

3. **Apple Sign-In**
   - Endpoint: POST `/api/auth/apple`
   - Auth Flow: OAuth 2.0 via Firebase

## 📚 Documentation

| Document | Contenu |
|----------|---------|
| [CONFIGURATION.md](server/CONFIGURATION.md) | Setup Firebase, credentials, etc. |
| [server/README.md](server/README.md) | Backend tech docs |
| [API_REFERENCE.md](API_REFERENCE.md) | Tous les endpoints API |
| [INTEGRATION.md](INTEGRATION.md) | Integration guide frontend |
| [server/EXEMPLES_REQUETES.md](server/EXEMPLES_REQUETES.md) | cURL & Postman examples |
| [RESUME_IMPLEMENTATION.md](RESUME_IMPLEMENTATION.md) | Résumé de ce qui a été créé |

## 🛠️ Technologies

### Backend
- **Express.js** - Framework HTTP
- **Firebase Admin SDK** - Auth & Firestore
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin requests

### Frontend
- **React 19** - UI Library
- **Vite** - Build tool
- **React Router** - Routing
- **React Hooks** - State management

## 📋 Endpoints Disponibles

### Public (Sans authentification)
```
POST   /api/auth/signup      # Créer compte
POST   /api/auth/login       # Login email/password
POST   /api/auth/google      # Login Google
POST   /api/auth/apple       # Login Apple
GET    /health               # Health check
```

### Protected (Avec JWT Token)
```
GET    /api/auth/me          # Récupérer utilisateur
POST   /api/auth/logout      # Logout
```

## ⚙️ Configuration Requise

### Backend
- Node.js 16+ 
- Firebase Project avec:
  - Authentication (Email, Google, Apple)
  - Firestore Database
  - Service Account Credentials

### Frontend
- Node.js 16+
- Un navigateur moderne

## 🔑 Variables d'Environnement

### Backend (`server/.env`)
```env
FIREBASE_PROJECT_ID=xxx
FIREBASE_PRIVATE_KEY=xxx
FIREBASE_CLIENT_EMAIL=xxx
JWT_SECRET=xxx
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### Frontend (`.env.local`)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🧪 Test

### Avec cURL
```bash
# Health check
curl http://localhost:5000/health

# Signup
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123","displayName":"Test"}'
```

### Avec Postman
Voir [server/EXEMPLES_REQUETES.md](server/EXEMPLES_REQUETES.md)

## 📱 Utilisation du Frontend

### Envelopper l'app avec AuthProvider
```javascript
import { AuthProvider } from './hooks/useAuth.jsx'

<AuthProvider>
  <App />
</AuthProvider>
```

### Utiliser le hook
```javascript
import { useAuth } from './hooks/useAuth.jsx'

function MyComponent() {
  const { user, login, logout } = useAuth()
  // ...
}
```

## 🐛 Troubleshooting

### Erreur CORS
- Vérifier `FRONTEND_URL` dans `server/.env`
- Vérifier `VITE_API_URL` dans `.env.local`

### Token manquant/expiré
- Vérifier que le login a réussi
- Vérifier le token dans localStorage

### Firebase credentials invalides
- Vérifier `server/.env`
- Télécharger les credentials à nouveau de Firebase Console

## 📈 Prochaines Étapes

- [ ] Implémenter refresh tokens
- [ ] Ajouter password reset
- [ ] Ajouter email verification
- [ ] Endpoints profil utilisateur
- [ ] Endpoints voyages
- [ ] Endpoints réservations
- [ ] Tests unitaires
- [ ] Déploiement production

## 🚢 Déploiement

### Backend
Options: Heroku, Railway, Render, DigitalOcean, AWS

### Frontend
Options: Vercel, Netlify, GitHub Pages, AWS S3

## 📞 Support

Pour des questions ou problèmes:
1. Consultez la documentation des fichiers README
2. Vérifiez les erreurs dans la console
3. Vérifiez les logs du serveur

## 📄 Licence

ISC

## 👨‍💻 Auteur

Mooves Travel Development Team

---

**Prêt à commencer?** 🚀

```bash
# Windows
setup.bat

# Linux/Mac
./setup.sh
```
