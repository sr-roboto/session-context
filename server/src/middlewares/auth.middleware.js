import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  console.log('token', token);

  if (!token) {
    return res.status(401).send('No autorizado.');
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('No autorizado.');
    }

    req.user = decoded;
    next();
  });
};

export { authMiddleware };
