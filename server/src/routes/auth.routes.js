<<<<<<< HEAD:src/routes/auth.routes.js
import { Router } from 'express';
import { ctrlGetUserInfoByToken, ctrlLoginUser } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.get('/user', ctrlGetUserInfoByToken);

authRouter.post('/login', ctrlLoginUser);

export { authRouter }
=======
import { Router } from "express";
import { ctrlLoginUser } from "../controllers/auth.controller.js";
import { getUser } from "../middlewares/getUser.js";
import { isRol } from "../middlewares/roles.js";

const authRouter = Router();
//Login
authRouter.post("/auth/login", ctrlLoginUser);
authRouter.get("/rol/user", getUser, isRol);

export { authRouter };
>>>>>>> develop-romero-ezequiel:server/src/routes/auth.routes.js
