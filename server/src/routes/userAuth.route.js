import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
  verifyTokenController,
} from '../controllers/userAuth.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const userAuthRouter = Router();

userAuthRouter.post('/login', loginUserController);

userAuthRouter.post('/logout', authMiddleware, logoutUserController);

userAuthRouter.get('/verify', authMiddleware, verifyTokenController);

export { userAuthRouter };
