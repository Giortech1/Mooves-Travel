import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import carRentalRoutes from './routes/carRentalRoutes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/car-rental', carRentalRoutes);

// Route de santé
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Serveur en bonne santé',
    timestamp: new Date(),
  });
});

// Gestion des routes non trouvées
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route non trouvée',
  });
});


// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
  console.log(`🔒 CORS activé pour: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
});

export default app;
