import express from "express";
import { indexRouter } from "./index.routes.js";
import { pacienteRouter } from "./paciente.routes.js";
import { userRouter } from "./user.routes.js";

import { crearPersona } from "../controllers/persona.controller.js";

const router = express();

//Index
router.use(indexRouter);

//Pacientes
router.use('/api',pacienteRouter) 

//Usuarios
router.use(userRouter)


//Auth

//Doctores

//Personas
router.post("/personas", crearPersona)

//Administradores

export { router };
