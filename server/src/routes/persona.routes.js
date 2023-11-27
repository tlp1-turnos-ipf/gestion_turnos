import { Router } from "express";

import validateSchema from "../middlewares/validateSchema.js";
import { validatePerson } from "../models/validation.js"

import { crearPersona } from "../controllers/persona.controller.js";

const personaRouter = Router();

<<<<<<< HEAD:src/routes/persona.routes.js
personaRouter.post("/personas", validatePerson, validateSchema, crearPersona);
=======
personaRouter.post("/api/persona", crearPersona);
>>>>>>> develop-romero-ezequiel:server/src/routes/persona.routes.js

export { personaRouter };
