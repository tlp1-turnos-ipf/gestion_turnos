import { Router } from "express";
import {
  ctrlCreateEspecialidad,
  ctrlEspecialidadGetById,
  ctrlGetAllEspecialidad,
  ctrlDeleteEspecialidad,
  ctrlEspecialidadUpdateById,
} from "../controllers/especialidad.controller.js";

const especialidadRoutes = Router();

//Obtener todos las especialidades
especialidadRoutes.get("/api/especialidad", ctrlGetAllEspecialidad);

//Obtener especialidad por ID
especialidadRoutes.get("/api/especialidad/:id", ctrlEspecialidadGetById);

//Create una especialidad
especialidadRoutes.post("/api/especialidad", ctrlCreateEspecialidad);

// Modificar especialidad
especialidadRoutes.put("/api/especialidad/:id", ctrlEspecialidadUpdateById);

// Eliminar una especialidad
especialidadRoutes.delete("/api/especialidad/:id", ctrlDeleteEspecialidad);

export { especialidadRoutes };
