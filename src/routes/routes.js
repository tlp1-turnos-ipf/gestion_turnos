import express from "express";
import { indexRouter } from "./index.routes.js";

import { crearPaciente, 
    obtenerPacientes, 
    obtenerPacientesCompleto,
    obtenerPaciente, 
    modificarPaciente, 
    modificarEstadoPaciente, 
    eliminarPaciente 
} from './../controllers/paciente.controller.js';

import { crearPersona } from "../controllers/persona.controller.js";
import { crearUsuarioAdmin, crearUsuarioDoctor, crearUsuarioPaciente } from "../controllers/usuario.controller.js";

const router = express();

//Index
router.use(indexRouter);

//Auth

//Doctores

//Pacientes
router.get('/pacientes/activos', obtenerPacientes) 
router.get('/pacientes/completos', obtenerPacientesCompleto)
router.get('/pacientes/:id', obtenerPaciente)
router.post("/pacientes", crearPaciente)
router.put("/pacientes/:id",modificarPaciente)
router.put('/pacientes/estado/:id', modificarEstadoPaciente)
router.delete("/pacientes/:id",eliminarPaciente)

//Personas
router.post("/personas", crearPersona)

//Usuarios
router.post("/usuarioPaciente", crearUsuarioPaciente)
router.post('/usuarioDoctor', crearUsuarioDoctor)
router.post('/usuarioDoctor', crearUsuarioAdmin)

//Administradores

export { router };
