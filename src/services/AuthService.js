/**
 * Service d'authentification
 * Gère toutes les appels API pour l'authentification
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class AuthService {
  /**
   * Login avec email et mot de passe
   */
  static async loginWithEmail(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
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
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Erreur login:', error);
      throw error;
    }
  }

  /**
   * Inscription avec email et mot de passe
   */
  static async signupWithEmail(email, password, displayName) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, displayName }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Erreur signup:', error);
      throw error;
    }
  }

  /**
   * Login avec Google
   * @param {string} idToken - Token ID de Google
   */
  static async loginWithGoogle(idToken) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Erreur Google login:', error);
      throw error;
    }
  }

  /**
   * Login avec Apple
   * @param {string} idToken - Token ID d'Apple
   * @param {string} email - Email Apple
   * @param {string} fullName - Nom complet
   */
  static async loginWithApple(idToken, email, fullName) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/apple`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken, email, fullName }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Erreur Apple login:', error);
      throw error;
    }
  }

  /**
   * Récupérer l'utilisateur actuel
   */
  static async getCurrentUser() {
    try {
      const token = localStorage.getItem('authToken');

      if (!token) {
        return null;
      }

      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        return data.user;
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Erreur récupération utilisateur:', error);
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      return null;
    }
  }

  /**
   * Logout
   */
  static async logout() {
    try {
      const token = localStorage.getItem('authToken');

      if (token) {
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      }

      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      return true;
    } catch (error) {
      console.error('Erreur logout:', error);
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      return true;
    }
  }

  /**
   * Vérifier si l'utilisateur est connecté
   */
  static isAuthenticated() {
    return !!localStorage.getItem('authToken');
  }

  /**
   * Récupérer le token
   */
  static getToken() {
    return localStorage.getItem('authToken');
  }

  /**
   * Récupérer l'utilisateur stocké localement
   */
  static getStoredUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}

export default AuthService;
