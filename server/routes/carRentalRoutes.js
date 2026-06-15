import express from 'express';
import { createCarRental } from '../controllers/carRentalController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Route protégée : seul un utilisateur connecté peut louer une voiture
router.post('/book', authenticateToken, createCarRental);

export default router;