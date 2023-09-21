import { Persona } from "../models/persona.model.js";
import { Usuario } from "../models/usuario.model.js";
import { Doctor } from "../models/doctor.model.js";
import { Especialidad } from "../models/especialidad.model.js";

//Ctrl for create a newDoctor
export const ctrlCreateDoctor = async (req, res) => {
  try {
    //Obtenemos el ultimo id de especialidad
    const ultimoIdEspecialidad = await Especialidad.findOne();
    //En caso que haya errores al guardar un Doctor
    if (!ultimoIdEspecialidad) {
      throw {
        message: "Primero cargue una especialidad",
      };
    }

    //Obtenemos el id de la ultima persona creada
    const lastIdUser = await Usuario.max("usuario_id");

    const newDoctor = await Doctor.create({
      ...req.body,
      usuario_id: lastIdUser,
    });

    //En caso que haya errores al guardar un Doctor
    if (!newDoctor) {
      throw {
        message: "Error al crear el Doctor",
      };
    }

    // Se retorna la respuesta al cliente
    return res.status(201).json({ message: "Doctor Creado Exitosamente" });
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};

//ctrl for get all Users
export const ctrlGetAllDoctorActives = async (req, res) => {
  try {
    const doctores = await Doctor.findAll({
      include: [
        {
          model: Especialidad,
        },
        {
          model: Usuario,
          where: {
            estado: true,
          },

          include: {
            model: Persona,
          },
        },
      ],
    });

    if (!doctores) {
      throw {
        status: 404,
        message: "No se encontraron doctores",
      };
    }

    return res.status(200).json(doctores);
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};

// ctrl get all users completes
export const ctrlGetAllDoctorComplete = async (req, res) => {
  try {
    const doctores = await Doctor.findAll({
      include: [
        {
          model: Especialidad,
        },
        {
          model: Usuario,
          include: {
            model: Persona,
          },
        },
      ],
    });

    if (!doctores) {
      throw {
        status: 404,
        message: "No se encontraron doctores",
      };
    }

    return res.status(200).json(doctores);
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};

//ctrl get user by ID
export const ctrlGetDoctorById = async (req, res) => {
  try {
    //Busca el doctor mientras esté en estado true
    const persona = await Persona.findByPk(req.params.id);

    //Si no se encuentra la persona
    if (!persona) {
      throw {
        status: 400,
        message: "La persona no existe",
      };
    }

    return res.status(200).json(persona);
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};

//Ctrl update Doctor
export const ctrlUpdateDoctor = async (req, res) => {
  const user = req.body;
  try {
    const personUpdate = await Persona.update(
      {
        user,
      },
      {
        where: {
          persona_id: req.params.id,
        },
      }
    );

    if (!personUpdate) {
      throw {
        status: 400,
        message: "No se pudo actualizar el persona",
      };
    }

    return res.status(200).json({
      message: "Actualizado correctamente",
    });
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};

//Ctrl update doctor status
export const ctrlUpdateDoctorStatus = async (req, res) => {
  try {
    const doctorStatusActivate = await Usuario.update(
      {
        estado: true,
      },
      {
        where: {
          usuario_id: id,
        },
      }
    );

    if (!doctorStatusActivate) {
      throw {
        status: 400,
        message: "No se pudo cambiar el estado del doctor",
      };
    }

    return res.status(200).json({
      message: "Activado correctamente",
    });
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};

//Ctrl delete logically user
export const ctrlDeleteDoctor = async (req, res) => {
  try {
    const doctorDelete = await Usuario.update(
      {
        estado: false,
      },
      {
        where: {
          usuario_id: req.params.id,
        },
      }
    );

    if (!doctorDelete) {
      throw {
        status: 400,
        message: "No se pudo eliminar al doctor",
      };
    }

    res.status(201).json({
      message: "Eliminado correctamente",
    });
  } catch (error) {
    console.log("error: " + error.message);
    res.sendStatus(500).json({ message: "Error del servidor" });
  }
};
