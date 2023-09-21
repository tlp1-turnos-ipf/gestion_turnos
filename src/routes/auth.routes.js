import { Router } from 'express';
import { ctrlGetUserInfoByToken, ctrlLoginUser } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.get('/user', ctrlGetUserInfoByToken);

authRouter.post('/login', ctrlLoginUser);

export { authRouter }