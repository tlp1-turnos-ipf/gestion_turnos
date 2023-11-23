import { Router } from "express";
import { crearUsuario } from "../controllers/usuario.controller.js";

const userRouter = Router();

//Route create User
userRouter.post("/api/user", crearUsuario);

export { userRouter };
