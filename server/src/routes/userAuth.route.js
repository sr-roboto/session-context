import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
} from '../controllers/userAuth.controller.js';

const userAuthRouter = Router();

userAuthRouter.post('/login', loginUserController);

userAuthRouter.post('/logout', logoutUserController);

export { userAuthRouter };
