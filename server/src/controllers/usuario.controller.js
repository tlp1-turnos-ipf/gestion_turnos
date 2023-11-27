import bcrypt from "bcrypt";
import { Persona } from "../models/persona.model.js";
import { Usuario } from "../models/usuario.model.js";

// Controlador para crear nuevo usuario
export const crearUsuario = async (req, res) => {
  const { nombre_usuario, email, password, rol } = req.body;

  try {
    //Obtenemos el id de la ultima persona creada
    const ultimoIdPersona = await Persona.max("persona_id");

    //Se guardan los datos en la bd
    const nuevoUsuario = await Usuario.create({
      nombre_usuario,
      email,
      password: await bcrypt.hash(password, await bcrypt.genSalt(10)),
      persona_id: ultimoIdPersona,
      rol,
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
      message: "Error del servidor",
    });
  }
};

export const usuarioConectado = async (uid) => {
  const user = Usuario.findOne(uid, { online: true });
  return user;
};
