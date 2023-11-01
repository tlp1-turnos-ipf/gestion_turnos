import { Especialidad } from "../models/especialidad.model.js";
import { ctrlEspecialidadGetById } from "./especialidad.controller";

//Obtener todas las especialidades
export const ctrlGetAllEspecialidad = async (res, req) => {
  try {
    const Especialidades = await Especialidad.findAll();

    if (!Especialidades) {
      throw {
        status: 404,
        message: "No se encontraron Especialidades",
      };
    }

    res.status(200).json(Especialidades);
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};

//Crear la especialidad
export const ctrlCreateEspecialidad = async (req, res) => {
  try {
    const createEspecialidad = await Especialidad.create(req.body);
    //En caso que haya errores al guardar la especialidad
    if (!createEspecialidad) {
      throw {
        message: "Error al crear la especialidad",
      };
    }
    // Se retorna la respuesta al cliente
    res.status(201).json({ message: "Especialidad Creado Exitosamente" });
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};

//Buscar por ID de la especialidad
export const ctrlEspecialidadGetById = async (req, res) => {
  try {
    const especialidad = await Especialidad.findByPk(req.params.id);

    //Si no se encuentra el persona
    if (!especialidad) {
      throw {
        status: 400,
        message: "La especialidad no existe",
      };
    }

    return res.status(200).json(especialidad);
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};

//Modificar la especialidad
export const ctrlEspecialidadUpdateById = async (req, res) => {
  const user = req.body;
  try {
    const EspecialidadUpdate = await Especialidad.update(user, {
      where: { especialidad_id: req.params.id },
    });

    if (!EspecialidadUpdate) {
      throw {
        status: 400,
        message: "No se pudo actualizar",
      };
    }

    return res.status(200).json({
      message: "Actualizado correctamente",
      EspecialidadUpdate,
    });
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};

export const ctrlDeleteEspecialidad = async (req, res) => {
  try {
    const user = await Especialidad.findByPk(req.params.id);

    const deleteEspecialidad = await Especialidad.destroy(user);

    if (!deleteEspecialidad) {
      throw {
        status: 400,
        message: "No se pudo eliminar",
      };
    }

    res.status(200).json({
      message: "Eliminado correctamente",
      deleteEspecialidad,
    });
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};
