import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import Turno from "./turno.model.js";

const DevolucionTurno = sequelize.define(
  "Devolucion_Turno",
  {
    titulo_turno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripion_turno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    turno_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

//Realizo la relacion de uno a muchos
Turno.hasMany(DevolucionTurno, { foreignKey: "turno_id", as: "devolucion_turno" });
DevolucionTurno.belongsTo(Turno, { foreignKey: "turno_id" });

export default Turno;
