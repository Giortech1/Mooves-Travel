import express from 'express';
import {
  loginWithEmail,
  signupWithEmail,
  loginWithGoogle,
  loginWithApple,
  getCurrentUser,
  logout,
} from '../controllers/authController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Routes publiques (sans authentification)
router.post('/login', loginWithEmail);
router.post('/signup', signupWithEmail);
router.post('/google', loginWithGoogle);
router.post('/apple', loginWithApple);

// Routes protégées (nécessitent l'authentification)
router.get('/me', authenticateToken, getCurrentUser);
router.post('/logout', authenticateToken, logout);

export default router;
