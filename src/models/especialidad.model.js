import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { Doctor } from"./doctor.model.js";

export const Especialidad = sequelize.define(
  "Especialidad",
  {
    especialidad_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion_especialidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "especialidades",
  }
);

//Realizo la relacion de uno a muchos de la tabla doctor a especialidad
Especialidad.hasMany(Doctor, { foreignKey: "especialidad_id", as: "doctores" });
Doctor.belongsTo(Especialidad, { foreignKey: "especialidad_id" });

