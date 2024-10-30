import express from 'express';
import { applyMiddlewares } from './middlewares/app.middleware.js';
import { userAuthRouter } from './routes/userAuth.route.js';

// Inicializar la aplicación
const app = express();

// Aplicar middlewares
applyMiddlewares(app);

// Rutas
app.use('/auth', userAuthRouter);

export { app };
