# Guide de Configuration Firebase

Ce guide vous aide à configurer les credentials Firebase pour le serveur backend.

## 📝 Étapes de Configuration

### 1. Créer un Projet Firebase

1. Aller à [Firebase Console](https://console.firebase.google.com/)
2. Cliquer sur "Créer un projet"
3. Entrer un nom pour votre projet
4. Accepter les conditions et créer le projet

### 2. Obtenir les Credentials du Service Account

1. Dans la console Firebase, aller à **Paramètres du Projet** (⚙️)
2. Cliquer sur l'onglet **Comptes de service**
3. Sélectionner **Node.js** comme langage de SDK
4. Cliquer sur **Générer une nouvelle clé privée**
5. Télécharger le fichier JSON

### 3. Remplir le fichier `.env`

Ouvrez le JSON téléchargé et copiez les valeurs dans le `.env`:

```json
{
  "type": "service_account",
  "project_id": "votre-project-id",
  "private_key_id": "votre-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-xxxxx@votre-project-id.iam.gserviceaccount.com",
  "client_id": "1234567890",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs"
}
```

Remplir le `.env` comme suit:

```env
FIREBASE_PROJECT_ID=votre-project-id
FIREBASE_PRIVATE_KEY_ID=votre-private-key-id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@votre-project-id.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=1234567890
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
```

**⚠️ Important:** La clé privée doit avoir les vrais sauts de ligne, pas `\n` littéral.

### 4. Configurer l'Authentification Firebase

#### Activer Email/Mot de passe
1. Dans la console Firebase, aller à **Authentification**
2. Cliquer sur l'onglet **Méthode de connexion**
3. Activer **Email/Mot de passe**

#### Activer Google Sign-In
1. Dans la console Firebase, aller à **Authentification**
2. Cliquer sur **+ Ajouter une méthode de connexion**
3. Sélectionner **Google**
4. Activer et configurer

#### Activer Apple Sign-In
1. Dans la console Firebase, aller à **Authentification**
2. Cliquer sur **+ Ajouter une méthode de connexion**
3. Sélectionner **Apple**
4. Activer et suivre les instructions

### 5. Créer la Collection Firestore

1. Dans la console Firebase, aller à **Firestore Database**
2. Cliquer sur **Créer une base de données**
3. Choisir le mode **Commencer en mode test** (pour le développement)
4. Sélectionner la région
5. Créer

#### Structure de la Collection `users`

La collection sera créée automatiquement lors du premier login, avec la structure:

```json
{
  "email": "user@example.com",
  "displayName": "John Doe",
  "photoURL": "https://...",
  "passwordHash": "hashed_password",
  "authProviders": ["email", "google"],
  "verified": true,
  "createdAt": "2024-01-15T10:30:00Z",
  "lastLogin": "2024-01-16T14:45:00Z",
  "lastLoginProvider": "google"
}
```

### 6. Générer une Clé JWT Secrète

Pour la variable `JWT_SECRET`, générer une clé aléatoire forte:

```bash
# Sur Linux/Mac
openssl rand -base64 32

# Ou utiliser Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 7. Configurer CORS

Dans le `.env`, définir:

```env
FRONTEND_URL=http://localhost:5173
```

Pour la production, remplacer par l'URL de votre frontend.

## 🔐 Configuration de Sécurité Firestore

En production, remplacer les règles de test par:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Les utilisateurs ne peuvent lire/écrire que leur propre document
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
```

## ✅ Vérification

Pour vérifier que tout est configuré correctement:

```bash
# 1. Démarrer le serveur
npm run dev

# 2. Tester la connexion Firebase
curl http://localhost:5000/health

# 3. Tester la création d'utilisateur
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Test123","displayName":"Test"}'
```

## 🐛 Problèmes Courants

### "Cannot find Firebase credentials"
- Vérifier que le `.env` est dans le dossier `server/`
- Vérifier que `FIREBASE_PROJECT_ID` n'est pas vide
- Redémarrer le serveur après modification du `.env`

### "Invalid private key"
- S'assurer que `FIREBASE_PRIVATE_KEY` contient les vrais sauts de ligne
- Copier-coller directement du JSON Firebase
- Utiliser `\n` littéralement dans le `.env`, pas des vrais sauts de ligne

### "CORS error"
- Vérifier que `FRONTEND_URL` correspond à l'URL du frontend
- En développement, utiliser `http://localhost:5173` pour Vite

### "User already exists"
- Vérifier que l'email n'existe pas déjà dans Firebase
- Dans la console, aller à **Authentification > Utilisateurs** pour supprimer

## 📚 Ressources

- [Firebase Console](https://console.firebase.google.com/)
- [Firebase Admin SDK Doc](https://firebase.google.com/docs/admin/setup)
- [Firestore Rules](https://firebase.google.com/docs/firestore/security)
- [Authentication Methods](https://firebase.google.com/docs/auth)
