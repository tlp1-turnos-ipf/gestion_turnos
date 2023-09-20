import { Router } from "express";
import { crearUsuario } from "../controllers/usuario.controller.js";

const userRouter = Router();

userRouter.post("/usuario", crearUsuario)


export {userRouter}