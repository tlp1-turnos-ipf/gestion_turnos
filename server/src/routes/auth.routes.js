import { Router } from "express";
import { ctrlLoginUser } from "../controllers/auth.controller.js";
import { getUser } from "../middlewares/getUser.js";
import { isRol } from "../middlewares/roles.js";

const authRouter = Router();
//Login
authRouter.post("/auth/login", ctrlLoginUser);
authRouter.get("/rol/user", getUser, isRol);

export { authRouter };
