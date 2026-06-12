import jwt from 'jsonwebtoken';

// Vérifier le token JWT
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Accès refusé. Token manquant.',
    });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: 'Token invalide ou expiré.',
      error: error.message,
    });
  }
};

// Générer un token JWT
export const generateToken = (userId, email) => {
  return jwt.sign(
    { uid: userId, email: email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '7d' }
  );
};
