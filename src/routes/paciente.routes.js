import { Router } from "express";

import { crearPaciente, 
    obtenerPacientes, 
    obtenerPacientesCompleto,
    obtenerPaciente, 
    modificarPaciente, 
    modificarEstadoPaciente, 
    eliminarPaciente 
} from './../controllers/paciente.controller.js';

const pacienteRouter = Router();

pacienteRouter.get('/pacientes/activos', obtenerPacientes) 
pacienteRouter.get('/pacientes/completos', obtenerPacientesCompleto)
pacienteRouter.get('/pacientes/:id', obtenerPaciente)
pacienteRouter.post("/pacientes", crearPaciente)
pacienteRouter.put("/pacientes/:id",modificarPaciente)
pacienteRouter.put('/pacientes/estado/:id', modificarEstadoPaciente)
pacienteRouter.delete("/pacientes/:id",eliminarPaciente)

export {pacienteRouter} 