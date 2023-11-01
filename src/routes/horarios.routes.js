import { Router } from "express";
import {
  ctrlCreateHorario,
  ctrlDeleteHorario,
  ctrlFindAllHorarioDisponibles,
  ctrlFindHorarioById,
  ctrlUpdateHorario,
} from "../controllers/horario.controller.js";

const horarioRouter = Router();

// =====================================================
//         routes to manage Horario
// =====================================================

horarioRouter.get("/api/horarios/disponibles/:id", ctrlFindAllHorarioDisponibles);
horarioRouter.get("/api/horarios/:id", ctrlFindHorarioById);
horarioRouter.post("/api/horarios/:id", ctrlCreateHorario);
horarioRouter.put("/api/horarios/:id", ctrlUpdateHorario);
horarioRouter.delete("/api/horarios/:id", ctrlDeleteHorario);

export {horarioRouter}