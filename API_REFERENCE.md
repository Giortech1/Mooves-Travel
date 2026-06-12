# 📚 Documentation Complète des Endpoints API

## 🌍 Base URL

**Développement**: `http://localhost:5000`  
**Production**: À configurer

## 🔒 Authentification

Tous les endpoints protégés nécessitent un header:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📋 Endpoints Disponibles

### 🏥 Health Check
Vérifier que le serveur est actif.

```
GET /health
```

**Réponse (200)**:
```json
{
  "success": true,
  "message": "Serveur en bonne santé",
  "timestamp": "2024-01-16T10:30:00.000Z"
}
```

---

### 🔓 AUTHENTIFICATION (Publique)

#### 1. Signup - Email
Créer un compte avec email et mot de passe.

```
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123",
  "displayName": "John Doe"
}
```

**Réponse (201)**:
```json
{
  "success": true,
  "message": "Inscription réussie.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "uid": "user_123",
    "email": "user@example.com",
    "displayName": "John Doe"
  }
}
```

**Erreurs**:
- `400`: Email/mot de passe/nom manquant
- `400`: Email déjà enregistré
- `500`: Erreur serveur

---

#### 2. Login - Email
Se connecter avec email et mot de passe.

```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePass123"
}
```

**Réponse (200)**:
```json
{
  "success": true,
  "message": "Connexion réussie.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "uid": "user_123",
    "email": "user@example.com",
    "displayName": "John Doe",
    "photoURL": ""
  }
}
```

**Erreurs**:
- `400`: Email/mot de passe manquant
- `401`: Email ou mot de passe incorrect
- `500`: Erreur serveur

---

#### 3. Login - Google
Se connecter avec Google.

```
POST /api/auth/google
Content-Type: application/json

{
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ..."
}
```

**Réponse (200)**:
```json
{
  "success": true,
  "message": "Connexion Google réussie.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "uid": "google_user_123",
    "email": "user@gmail.com",
    "displayName": "John Doe",
    "photoURL": "https://..."
  }
}
```

**Notes**:
- Le `idToken` provient de la SDK Google Sign-In
- Crée automatiquement un utilisateur s'il n'existe pas
- Lie Google aux providers existants

---

#### 4. Login - Apple
Se connecter avec Apple.

```
POST /api/auth/apple
Content-Type: application/json

{
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjEifQ...",
  "email": "user@privaterelay.appleid.com",
  "fullName": "John Doe"
}
```

**Réponse (200)**:
```json
{
  "success": true,
  "message": "Connexion Apple réussie.",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "uid": "apple_user_123",
    "email": "user@privaterelay.appleid.com",
    "displayName": "John Doe"
  }
}
```

**Notes**:
- L'email peut être masqué par Apple (privaterelay)
- Le `fullName` est optionnel

---

### 🔐 AUTHENTIFICATION (Protégée)

#### 5. Récupérer l'utilisateur actuel
Récupérer les infos de l'utilisateur connecté.

```
GET /api/auth/me
Authorization: Bearer YOUR_JWT_TOKEN
```

**Réponse (200)**:
```json
{
  "success": true,
  "user": {
    "uid": "user_123",
    "email": "user@example.com",
    "displayName": "John Doe",
    "photoURL": "https://...",
    "authProviders": ["email", "google"],
    "verified": true
  }
}
```

**Erreurs**:
- `401`: Token manquant
- `403`: Token invalide/expiré
- `404`: Utilisateur non trouvé

---

#### 6. Logout
Se déconnecter.

```
POST /api/auth/logout
Authorization: Bearer YOUR_JWT_TOKEN
```

**Réponse (200)**:
```json
{
  "success": true,
  "message": "Déconnexion réussie."
}
```

---

## 🧪 Exemples d'Utilisation

### Avec cURL

```bash
# Signup
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"Test123",
    "displayName":"Test User"
  }'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"test@example.com",
    "password":"Test123"
  }'

# Get Current User
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_TOKEN"

# Logout
curl -X POST http://localhost:5000/api/auth/logout \
  -H "Authorization: Bearer YOUR_TOKEN"
```

### Avec JavaScript/Fetch

```javascript
// Signup
const signupResponse = await fetch('http://localhost:5000/api/auth/signup', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'test@example.com',
    password: 'Test123',
    displayName: 'Test User'
  })
});
const signupData = await signupResponse.json();
const token = signupData.token;

// Get Current User
const userResponse = await fetch('http://localhost:5000/api/auth/me', {
  headers: { 'Authorization': `Bearer ${token}` }
});
const userData = await userResponse.json();
```

### Avec le Service d'Authentification (React)

```javascript
import AuthService from './services/AuthService.js';

// Signup
await AuthService.signupWithEmail('test@example.com', 'Test123', 'Test User');

// Login
await AuthService.loginWithEmail('test@example.com', 'Test123');

// Récupérer l'utilisateur actuel
const user = await AuthService.getCurrentUser();

// Logout
await AuthService.logout();
```

---

## 🔑 Format du Token JWT

Le token JWT a la structure suivante:

```json
{
  "uid": "user_123",
  "email": "user@example.com",
  "iat": 1705418400,
  "exp": 1706023200
}
```

**Propriétés**:
- `uid`: ID unique de l'utilisateur
- `email`: Email de l'utilisateur
- `iat`: Date de création (timestamp)
- `exp`: Date d'expiration (7 jours par défaut)

---

## 📊 Structure des Données Utilisateur

### Stockage Firestore

```json
{
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

---

## ✅ Codes de Réponse HTTP

| Code | Signification | Exemple |
|------|--------------|---------|
| 200 | OK | Login réussi |
| 201 | Created | Utilisateur créé |
| 400 | Bad Request | Données manquantes |
| 401 | Unauthorized | Email/mot de passe incorrect |
| 403 | Forbidden | Token invalide |
| 404 | Not Found | Utilisateur non trouvé |
| 500 | Server Error | Erreur serveur |

---

## 🔄 Flux d'Authentification Complet

```
[Frontend]                      [Backend]
    |                              |
    |-- POST /auth/signup -------->|
    |                              |-- Valide les données
    |                              |-- Hash le mot de passe
    |                              |-- Crée l'utilisateur Firebase
    |                              |-- Crée le doc Firestore
    |                              |-- Génère le JWT
    |<-- Token + User Data --------|
    |                              |
    |-- Sauvegarde Token --------->| localStorage
    |                              |
    |-- POST /api/... ------>      |
    |   (avec Authorization)       |
    |                              |-- Vérifie le Token
    |<-- Réponse -------------------|
```

---

## 🛡️ Sécurité

### Best Practices

1. **Toujours HTTPS en production**
   ```
   Production: https://api.mooves.com
   ```

2. **Valider les entrées côté serveur**
   - Format email
   - Longueur mot de passe
   - Pas de caractères spéciaux dangereux

3. **Stocker le token de manière sécurisée**
   ```javascript
   // ✅ Bon
   localStorage.setItem('token', jwt);
   
   // ❌ Mauvais
   window.token = jwt; // Accessible par XSS
   ```

4. **Implémenter un refresh token**
   ```
   POST /api/auth/refresh
   ```

5. **Rate Limiting**
   - Limiter les tentatives de login
   - Prévenir le brute force

---

## 📞 Support

Pour des questions:
- Consultez [server/README.md](./server/README.md)
- Consultez [CONFIGURATION.md](./server/CONFIGURATION.md)
- Consultez [INTEGRATION.md](./INTEGRATION.md)
