import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import { Doctor } from "./doctor.model.js";

export const DoctorFecha = sequelize.define(
  "Doctor_Fecha",
  {
    doctor_fecha_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    horario_inicio: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    horario_fin: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad_turnos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado_turno: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    timestamps: true,
    tableName: "doctores_fecha",
  }
);

//Realizo la relacion de uno a muchos de la tabla doctor a turno
Doctor.hasMany(DoctorFecha, { foreignKey: "doctor_id", as: "fechas_doctores" });
DoctorFecha.belongsTo(Doctor, { foreignKey: "doctor_id" });
