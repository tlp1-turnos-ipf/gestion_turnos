import { Persona } from "../models/persona.model.js";
import { Usuario } from "../models/usuario.model.js";
import { Especialidad } from "../models/especialidad.model.js";

// Controlador para crear nuevo Persona
export const crearPersona = async (req, res) => {
  const {
    nombres,
    apellidos,
    fecha_nac,
    dni,
    direccion,
    telefono,
    sexo,
    email,
  } = req.body;

  try {
    // Se verifica si la persona ya existe
    const existePersona = await Persona.findOne({ where: { dni } });

    if (existePersona) {
      return res
        .status(400)
        .json({ status: 400, message: "La persona ya existe" });
    }

    const especialidades = await Especialidad.findAll();

    if (!especialidades) {
      return res
        .status(400)
        .json({ message: "Primero es necesario que las especialidades" });
    }

    //Verifica si existe el usuario
    const existeUsuario = await Usuario.findOne({
      where: {
        email,
      },
    });

    if (existeUsuario) {
      return res
        .status(400)
        .json({ message: "Ya existe un usuario con el mismo email" });
    }

    //Se crea a la persona
    const nuevoPersona = await Persona.create({
      nombres,
      apellidos,
      dni,
      direccion,
      fecha_nacimiento: fecha_nac,
      sexo,
      telefono,
    });

    if (!nuevoPersona) {
      throw {
        message: "Error al crear el Persona",
      };
    }

    // Se retorna la respuesta al cliente
    return res.status(201).json({ message: "Registrado correctamente" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error al crear la persona" });
  }
};
