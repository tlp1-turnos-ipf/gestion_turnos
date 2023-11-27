import { Turno } from "../models/turno.model.js";
import { DoctorFecha } from "../models/doctorFecha.model.js";

//Controlador para crear un turno
export const ctrlCreateTurno = async (req, res) => {
  const { id } = req.params;
  const { paciente_id } = req.body;

  try {
    // Consultar la DoctorFecha correspondiente al id
    const doctorFecha = await DoctorFecha.findByPk(id);

    if (doctorFecha.cantidad_turnos > 0) {
      //Se guardan los datos en la bd
      const nuevoTurno = await Turno.create({
        paciente_id: paciente_id,
        doctor_fecha_id: id,
      });

      // Reducir la cantidad de turnos en 1
      await doctorFecha.decrement("cantidad_turnos", { by: 1 });

      //En caso que haya errores al guardar un Turno
      if (!nuevoTurno) {
        throw {
          message: "Error al crear el Turno",
        };
      }

      // Se retorna la respuesta al cliente
      return res.status(201).json({ message: "Turno Creado Exitosamente" });
    } else {
      return res.status(400).json({ message: "No hay turnos disponibles" });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
