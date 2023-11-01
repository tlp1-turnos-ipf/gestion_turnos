import { Router } from "express";

import {
  crearPaciente,
  obtenerPacientes,
  obtenerPacientesCompleto,
  obtenerPaciente,
  modificarPaciente,
  modificarEstadoPaciente,
  eliminarPaciente,
} from "../controllers/paciente.controller.js";

const pacienteRouter = Router();

// =====================================================
//         routes to manage patients
// =====================================================

//Obtener todos los pacientes activos
pacienteRouter.get("/api/pacientes/activos", obtenerPacientes);

//Obtener todos los pacientes completos
pacienteRouter.get("/api/pacientes/completos", obtenerPacientesCompleto);

//Obtener un Paciente
pacienteRouter.get("/api/pacientes/:id", obtenerPaciente);

//Crear Paciente
pacienteRouter.post("/api/pacientes", crearPaciente);

//Modificar Paciente
pacienteRouter.put("/api/pacientes/:id", modificarPaciente);

//Modificar Estado del paciente
pacienteRouter.put("/api/pacientes/estado/:id", modificarEstadoPaciente);

//Eliminar un paciente de manera lógica
pacienteRouter.delete("/api/pacientes/:id", eliminarPaciente);

export { pacienteRouter };
