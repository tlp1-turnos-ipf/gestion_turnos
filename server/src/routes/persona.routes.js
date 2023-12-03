import { Router } from "express";

import { crearPersona } from "../controllers/persona.controller.js";

const personaRouter = Router();

personaRouter.post("/api/persona", crearPersona);

export { personaRouter };
