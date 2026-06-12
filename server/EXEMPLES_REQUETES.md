# Exemples de Requêtes API

## 🧪 Tests avec cURL

### 1. Health Check
```bash
curl -X GET http://localhost:5000/health
```

### 2. Inscription Email
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePass123",
    "displayName": "Test User"
  }'
```

### 3. Login Email
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePass123"
  }'
```

### 4. Login Google
```bash
curl -X POST http://localhost:5000/api/auth/google \
  -H "Content-Type: application/json" \
  -d '{
    "idToken": "GOOGLE_ID_TOKEN_HERE"
  }'
```

### 5. Login Apple
```bash
curl -X POST http://localhost:5000/api/auth/apple \
  -H "Content-Type: application/json" \
  -d '{
    "idToken": "APPLE_ID_TOKEN_HERE",
    "email": "user@privaterelay.appleid.com",
    "fullName": "John Doe"
  }'
```

### 6. Récupérer l'utilisateur actuel
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

### 7. Logout
```bash
curl -X POST http://localhost:5000/api/auth/logout \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE"
```

---

## 📮 Collection Postman

### Importer dans Postman

Vous pouvez créer une collection Postman avec les endpoints ci-dessus:

```json
{
  "info": {
    "name": "Mooves Travel API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Auth",
      "item": [
        {
          "name": "Health Check",
          "request": {
            "method": "GET",
            "url": "http://localhost:5000/health"
          }
        },
        {
          "name": "Signup Email",
          "request": {
            "method": "POST",
            "url": "http://localhost:5000/api/auth/signup",
            "body": {
              "mode": "raw",
              "raw": "{\"email\":\"test@example.com\",\"password\":\"SecurePass123\",\"displayName\":\"Test User\"}"
            }
          }
        },
        {
          "name": "Login Email",
          "request": {
            "method": "POST",
            "url": "http://localhost:5000/api/auth/login",
            "body": {
              "mode": "raw",
              "raw": "{\"email\":\"test@example.com\",\"password\":\"SecurePass123\"}"
            }
          }
        }
      ]
    }
  ]
}
```

---

## 🎯 Environnement Postman

Créer des variables d'environnement Postman:

| Variable | Valeur |
|----------|--------|
| `base_url` | `http://localhost:5000` |
| `token` | _(laisser vide, remplir après login)_ |
| `user_email` | `test@example.com` |
| `user_password` | `SecurePass123` |

### Exemple avec variables:
```bash
curl -X GET {{base_url}}/api/auth/me \
  -H "Authorization: Bearer {{token}}"
```

---

## 🔗 Intégration Frontend React

### Exemple: Login avec Email

```javascript
const handleEmailLogin = async (email, password) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      // Sauvegarder le token
      localStorage.setItem('authToken', data.token);
      
      // Rediriger vers la page d'accueil
      window.location.href = '/home';
    } else {
      console.error('Erreur:', data.message);
    }
  } catch (error) {
    console.error('Erreur de connexion:', error);
  }
};
```

### Exemple: Login Google

```javascript
import { GoogleLogin } from '@react-oauth/google';

const handleGoogleSuccess = async (credentialResponse) => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idToken: credentialResponse.credential,
      }),
    });

    const data = await response.json();

    if (data.success) {
      localStorage.setItem('authToken', data.token);
      window.location.href = '/home';
    }
  } catch (error) {
    console.error('Erreur Google:', error);
  }
};
```

### Exemple: Récupérer l'utilisateur connecté

```javascript
const fetchCurrentUser = async () => {
  const token = localStorage.getItem('authToken');

  try {
    const response = await fetch('http://localhost:5000/api/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (data.success) {
      setUser(data.user);
    }
  } catch (error) {
    console.error('Erreur:', error);
  }
};
```

---

## ✅ Checklist de Vérification

- [ ] `.env` configuré avec les credentials Firebase
- [ ] `npm install` exécuté
- [ ] Serveur démarré (`npm run dev`)
- [ ] Test health check (`/health`)
- [ ] Inscription email fonctionnelle
- [ ] Login email fonctionnel
- [ ] Récupération utilisateur avec token fonctionnelle
- [ ] Login Google configuré et testé
- [ ] Login Apple configuré et testé
- [ ] Tokens JWT générés correctement
- [ ] CORS fonctionnant correctement

---

## 📞 Support

Pour plus de détails, consultez:
- [README.md](./README.md)
- [Docs Firebase](https://firebase.google.com/docs)
- [Docs Express](https://expressjs.com)
