import jwt from 'jsonwebtoken';

// Vérifier le token JWT
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    console.log("Authentification: Token manquant dans la requête.");
    return res.status(401).json({
      success: false,
      message: 'Accès refusé. Token manquant.',
    });
  }

  try {
    console.log("Authentification: Tentative de vérification du token:", token);
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    console.error("Authentification: Erreur de vérification du token:", error.message);
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
