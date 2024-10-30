import express from 'express';
import { applyMiddlewares } from './middlewares/app.middleware.js';

// Inicializar la aplicación
const app = express();

// Aplicar middlewares
applyMiddlewares(app);

export { app };
