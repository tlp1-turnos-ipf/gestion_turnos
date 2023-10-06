import { Router } from "express";

import validateSchema from "../middlewares/validateSchema.js";
import validatePerson from "../models/validation.js"

import { crearPersona } from "../controllers/persona.controller.js";

const personaRouter = Router();

personaRouter.post("/personas", validatePerson, validateSchema, crearPersona);

export {personaRouter}