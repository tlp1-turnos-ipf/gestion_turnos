import { Router } from "express";

import {
  ctrlCreateDoctor,
  ctrlGetAllDoctorActives,
  ctrlGetAllDoctorComplete,
  ctrlGetDoctorById,
  ctrlUpdateDoctor,
  ctrlDeleteDoctor,
  ctrlUpdateDoctorStatus,
} from "../controllers/doctor.controller.js";

const doctorRouter = Router();

// =====================================================
//         routes to manage Doctors
// =====================================================

//Crear Doctor
doctorRouter.post("/api/doctor", ctrlCreateDoctor);

//Obtener todos todos los doctores
doctorRouter.get("/api/doctor/activo", ctrlGetAllDoctorActives);

//Obtener todos todos los doctores
doctorRouter.get("/api/doctor/completo", ctrlGetAllDoctorComplete);

//Obtener un Doctor
doctorRouter.get("/api/doctor/:id", ctrlGetDoctorById);

//Modificar doctor
doctorRouter.put("/api/doctor/:id", ctrlUpdateDoctor);
//Modificar doctor
doctorRouter.put("/api/doctor/estado/:id", ctrlUpdateDoctorStatus);

//Eliminar un doctor de manera lógica
doctorRouter.delete("/api/doctor/:id", ctrlDeleteDoctor);

export { doctorRouter };
