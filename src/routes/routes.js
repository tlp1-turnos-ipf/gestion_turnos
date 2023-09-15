import express from "express";
import { indexRouter } from "./index.routes.js";

const router = express();

//Index
router.use(indexRouter);

//Auth

//Doctores

//Pacientes

//Administradores

export { router };
