import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
<<<<<<< HEAD
import { Usuario } from "./usuario.model.js";
=======
import {Usuario} from "./usuario.model.js";
>>>>>>> develop-romero-ezequiel

export const Rol = sequelize.define(
  "Rol",
  {
    descripcion_rol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "roles",
  }
);

//Realizo la relacion de uno a muchos
Rol.hasMany(Usuario, { foreignKey: "rol" });
Usuario.belongsTo(Rol, { foreignKey: "rol" });
