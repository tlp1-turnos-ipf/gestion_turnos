import { Sequelize } from "sequelize";
import { DoctorFecha } from "../models/doctorFecha.model.js";

//Controlador para crear a los horarios
export const ctrlCreateHorario = async (req, res) => {
  const { id } = req.params;

  try {
    //Se guardan los datos en la bd
    const nuevoHorario = await DoctorFecha.create({
      ...req.body,
      doctor_id: id,
    });

    //En caso que haya errores al guardar un horario
    if (!nuevoHorario) {
      throw {
        message: "Error al crear el Horario",
      };
    }

    // Se retorna la respuesta al cliente
    return res.status(201).json({ message: "Horario Creado Exitosamente" });
  } catch (error) {
    return res.status(error.status || 500).json({
      message: "Error interno en el servidor",
    });
  }
};

//Controlador para obtener todos los horarios en base al doctor
export const ctrlFindAllHorarioDisponibles = async (req, res) => {
  const { id } = req.params;

  try {
    const horarios = await DoctorFecha.findAll({
      where: {
        doctor_id: id,
        cantidad_turnos: {
          [Sequelize.prototype.gt]: 0,
        },
      },
    });

    if (!horarios) {
      throw {
        status: 404,
        message: "No se encontraron horarios",
      };
    }

    return res.status(200).json(horarios);
  } catch (error) {
    return res.status(500).json({ message: "Error interno en el servidor" });
  }
};

//Controlador para buscar horarios por ID
export const ctrlFindHorarioById = async (req, res) => {
  const { id } = req.params;

  try {
    //Busca el horario
    const fecha = await DoctorFecha.findByPk(id);

    //Si no se encuentra el horario
    if (!fecha) {
      throw {
        status: 400,
        message: "La fecha no existe",
      };
    }

    return res.status(200).json(fecha);
  } catch (error) {
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

//Controlador para actualizar el horario
export const ctrlUpdateHorario = async (req, res) => {
  const { id } = req.params;
  const { fecha, cantidad_turnos, horario_inicio, horario_fin, descripcion } =
    req.body;

  try {
    const horarioUpdate = await DoctorFecha.update(
      {
        fecha,
        horario_inicio,
        horario_fin,
        descripcion,
        cantidad_turnos,
      },
      {
        where: {
          doctor_fecha_id: id,
        },
      }
    );

    if (!horarioUpdate) {
      throw {
        status: 400,
        message: "No se pudo actualizar la fecha",
      };
    }

    return res.status(202).json({
      message: "Actualizado correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};

//Controlador para eliminar un horario
export const ctrlDeleteHorario = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteHorario = await DoctorFecha.destroy({
      where: {
        doctor_fecha_id: id,
      },
    });

    if (!deleteHorario) {
      throw {
        status: 400,
        message: "No se pudo eliminar la fecha",
      };
    }

    return res.status(202).json({
      message: "Eliminado correctamente",
    });
  } catch (error) {
    return res.status(500).json({message:"Error interno del servidor"})
  }
};
