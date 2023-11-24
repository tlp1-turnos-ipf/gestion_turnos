import { Usuario } from "../models/usuario.model.js";

export const usuarioConectado = async (uid) => {
  const user = Usuario.findByPk(uid);
  return user;
};
