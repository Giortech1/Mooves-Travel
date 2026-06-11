# Backend API - Mooves Travel

Serveur Node.js/Express pour gérer l'authentification avec Firebase (Email, Google, Apple).

## 📋 Structure du Projet

```
server/
├── config/
│   └── firebase.js          # Configuration Firebase Admin SDK
├── controllers/
│   └── authController.js    # Logique d'authentification
├── middleware/
│   └── auth.js              # Middleware JWT et génération de tokens
├── routes/
│   └── authRoutes.js        # Routes d'authentification
├── index.js                 # Point d'entrée du serveur
├── package.json             # Dépendances
├── .env.example             # Variables d'environnement (exemple)
└── README.md                # Ce fichier
```

## 🚀 Installation

### 1. Installer les dépendances

```bash
cd server
npm install
```

### 2. Configurer les variables d'environnement

```bash
# Copier le fichier d'exemple
cp .env.example .env

# Éditer .env et remplir les informations Firebase
```

**Variables nécessaires:**
- `FIREBASE_PROJECT_ID` - ID du projet Firebase
- `FIREBASE_PRIVATE_KEY_ID` - Clé privée ID
- `FIREBASE_PRIVATE_KEY` - Clé privée (remplacer `\n` par des vraies sauts de ligne)
- `FIREBASE_CLIENT_EMAIL` - Email du service account
- `FIREBASE_CLIENT_ID` - ID du client
- `JWT_SECRET` - Clé secrète pour les JWT (générer une clé aléatoire forte)
- `PORT` - Port du serveur (défaut: 5000)
- `FRONTEND_URL` - URL du frontend pour CORS

### 3. Obtenir les credentials Firebase

1. Aller à [Firebase Console](https://console.firebase.google.com/)
2. Sélectionner votre projet
3. Aller à Paramètres → Comptes de service
4. Cliquer sur "Générer une nouvelle clé privée"
5. Télécharger le JSON et copier les valeurs dans `.env`

### 4. Démarrer le serveur

```bash
# Développement avec auto-reload
npm run dev

# Production
npm start
```

Le serveur démarrera sur `http://localhost:5000`

## 📡 API Endpoints

### 🔓 Authentification (Sans Token)

#### 1. **Login avec Email**
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

**Réponse (200):**
```json
{
  "success": true,
  "message": "Connexion réussie.",
  "token": "eyJhbGc...",
  "user": {
    "uid": "user_id",
    "email": "user@example.com",
    "displayName": "John Doe",
    "photoURL": ""
  }
}
```

#### 2. **Inscription avec Email**
```
POST /api/auth/signup
Content-Type: application/json

{
  "email": "newuser@example.com",
  "password": "securePassword123",
  "displayName": "John Doe"
}
```

#### 3. **Login avec Google**
```
POST /api/auth/google
Content-Type: application/json

{
  "idToken": "google_id_token_from_frontend"
}
```

#### 4. **Login avec Apple**
```
POST /api/auth/apple
Content-Type: application/json

{
  "idToken": "apple_id_token_from_frontend",
  "email": "user@privaterelay.appleid.com",
  "fullName": "John Doe"
}
```

### 🔐 Authentification (Avec Token)

#### 5. **Récupérer l'utilisateur actuel**
```
GET /api/auth/me
Authorization: Bearer YOUR_JWT_TOKEN
```

**Réponse (200):**
```json
{
  "success": true,
  "user": {
    "uid": "user_id",
    "email": "user@example.com",
    "displayName": "John Doe",
    "photoURL": "",
    "authProviders": ["email", "google"],
    "verified": true
  }
}
```

#### 6. **Logout**
```
POST /api/auth/logout
Authorization: Bearer YOUR_JWT_TOKEN
```

## 🔄 Flux d'authentification

### Email/Mot de passe
1. Utilisateur remplit le formulaire de login
2. Frontend envoie `POST /api/auth/login`
3. Backend valide les credentials
4. Backend retourne un JWT Token
5. Frontend stocke le token et l'envoie dans chaque requête

### Google/Apple
1. Frontend récupère l'ID Token via la SDK Google/Apple
2. Frontend envoie le token au backend (`POST /api/auth/google` ou `/api/auth/apple`)
3. Backend vérifie le token avec Firebase Admin SDK
4. Backend crée/met à jour l'utilisateur dans Firestore
5. Backend retourne un JWT Token
6. Frontend stocke le token

## 📊 Structure de l'utilisateur dans Firestore

```json
{
  "uid": "user_id",
  "email": "user@example.com",
  "displayName": "John Doe",
  "photoURL": "https://...",
  "passwordHash": "hashed_password",
  "authProviders": ["email", "google", "apple"],
  "verified": true,
  "createdAt": "2024-01-15T10:30:00Z",
  "lastLogin": "2024-01-16T14:45:00Z",
  "lastLoginProvider": "google"
}
```

## 🛡️ Sécurité

- **Passwords**: Hashés avec bcryptjs avant stockage
- **Tokens**: JWT signés avec une clé secrète
- **Firebase Admin SDK**: Utilise les credentials du service account
- **CORS**: Configuré pour accepter uniquement le frontend
- **Validation**: Validation des entrées sur chaque endpoint

## 🐛 Troubleshooting

### "Impossible de lire les credentials Firebase"
- Vérifier que le fichier `.env` est correctement configuré
- S'assurer que `FIREBASE_PRIVATE_KEY` contient les vraies sauts de ligne

### "Erreur CORS"
- Vérifier que `FRONTEND_URL` dans `.env` correspond à l'URL du frontend
- Ajouter l'URL du frontend dans les origines CORS autorisées

### "Token expiré"
- Le token JWT expire après 7 jours par défaut
- Implémenter un refresh token endpoint pour renouveler les tokens

## 📝 Notes

- Pour la production, utiliser HTTPS et des variables d'environnement sécurisées
- Implémenter un système de refresh tokens pour une meilleure sécurité
- Ajouter de la validation supplémentaire (formats email, force du mot de passe, etc.)
- Considérer l'ajout d'une rate limiting pour éviter les attaques par brute force

## 📚 Ressources

- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [Express.js](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
