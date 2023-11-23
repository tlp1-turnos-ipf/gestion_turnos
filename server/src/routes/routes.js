import express from "express";
import { indexRouter } from "./index.routes.js";
import { pacienteRouter } from "./paciente.routes.js";
import { userRouter } from "./user.routes.js";
import { personaRouter } from "./persona.routes.js";
import { doctorRouter } from "./doctor.routes.js";
import { authRouter } from "./auth.routes.js";
import { especialidadRoutes } from "./especialidad.routes.js";

const router = express();

//Auth
router.use(authRouter);

//Index
router.use(indexRouter);

//Personas
router.use(personaRouter);

//Pacientes
router.use(pacienteRouter);

//Usuarios
router.use(userRouter);

//Doctores
router.use(doctorRouter);

//Administradores

//Especialidades
router.use(especialidadRoutes);

//Export
export { router };
