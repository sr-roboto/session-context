import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../configs/env.config.js';

const createAccesToken = async (payload) => {
  try {
    const token = await new Promise((resolve, reject) => {
      jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' }, (error, token) => {
        if (error) {
          reject(error);
        }
        resolve(token);
      });
    });
    return token;
  } catch (error) {
    throw new Error('Error al crear el token de acceso.');
  }
};

export { createAccesToken };
