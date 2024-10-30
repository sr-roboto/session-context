import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
  verifyTokenController,
} from '../controllers/userAuth.controller.js';

const userAuthRouter = Router();

userAuthRouter.post('/login', loginUserController);

userAuthRouter.post('/logout', logoutUserController);

userAuthRouter.get('/verify', verifyTokenController);

export { userAuthRouter };
