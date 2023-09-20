import bcrypt from "bcrypt";
import { Persona } from "../models/persona.model.js";
import { Usuario } from "../models/usuario.model.js";

// Controlador para crear nuevo usuario
export const crearUsuarioPaciente = async (req, res) => {
  const { nombre_usuario, email, password } = req.body;

  try {
    //Obtenemos el id de la ultima persona creada
    const ultimoIdPersona = await Persona.max("persona_id");

    //Se guardan los datos en la bd
    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      email,
      password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
      persona_id: ultimoIdPersona,
      rol: 3,
    });

    //En caso que haya errores al guardar un paciente
    if (!nuevoUsuario) {
      throw {
        message: "Error al crear el usuario",
      };
    }

    // Se retorna la respuesta al cliente
    return res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: "Error al crear el usuario",
    });
  }
};

// Controlador para crear nuevo usuario doctor
export const crearUsuarioDoctor = async (req, res) => {
  const { nombre_usuario, email, password } = req.body;

  try {
    //Obtenemos el id de la ultima persona creada
    const ultimoIdPersona = await Persona.max("persona_id");

    //Se guardan los datos en la bd
    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      email,
      password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
      estado: 1,
      persona_id: ultimoIdPersona,
      rol: 4,
    });

    //En caso que haya errores al guardar un paciente
    if (!nuevoUsuario) {
      throw {
        message: "Error al crear el usuario",
      };
    }

    // Se retorna la respuesta al cliente
    return res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: "Error al crear el usuario",
    });
  }
};


// Controlador para crear nuevo usuario admin
export const crearUsuarioAdmin = async (req, res) => {
  const { nombre_usuario, email, password } = req.body;

  try {
    //Obtenemos el id de la ultima persona creada
    const ultimoIdPersona = await Persona.max("persona_id");

    //Se guardan los datos en la bd
    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      email,
      password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
      estado: 1,
      persona_id: ultimoIdPersona,
      rol: 2,
    });

    //En caso que haya errores al guardar un paciente
    if (!nuevoUsuario) {
      throw {
        message: "Error al crear el usuario",
      };
    }

    // Se retorna la respuesta al cliente
    return res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).json({
      message: "Error al crear el usuario",
    });
  }
};
