import { Usuario } from "../models/usuario.model.js";

//Buscar un usuario
export async function getUserById(userId) {
  return (await Usuario.findByPk(userId)) ?? null;
}
