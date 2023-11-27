<<<<<<< HEAD:src/controllers/auth.controller.js
import { createJWT } from '../helpers/jsonwebtoken.js'
import jwt from 'jsonwebtoken'
import { environments } from '../config/environments.js'
import { Usuario } from '../models/usuario.model.js'
import bcrypt from "bcrypt";

// ctrl Login User
export const ctrlLoginUser = async (req, res) => {
  try {
    const user = await getUserByEmailAndPassword(req.body)

    const token = await createJWT({ user: user.id })

    res.status(200).json(token)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}

// ctrl que valida si el token es válido.
export const ctrlGetUserInfoByToken = async (req, res) => {
  const token = req.headers.authorization

  if (!token) {
    return res.sendStatus(404)
  }

  const { user: id } = jwt.verify(token, environments.SECRET)

  const user = await getUserById(id)

  if (!user) {
    return res.sendStatus(404)
  }

  res.status(200).json(user)
}

//-----------------------------------
//             Servicio
//-----------------------------------

async function getAllUsers () {
  return await Usuario.findAll() ?? null
}

async function createUser (user) {
  const hashedPassword = await hashString(user.password)

  return await Usuario.create({ ...user, password: hashedPassword })
}

async function getUserById (id) {
  return await Usuario.findByPk(id) ?? null
}

async function getUserByEmailAndPassword ({ email, password }) {
  const user = await Usuario.findOne({ where: { email } })

  if (!user) {
    return null
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)

  if (!isPasswordValid) {
    return null
  }

  return user
}
=======
import bcrypt from "bcrypt";
import { Usuario } from "../models/usuario.model.js";
import { generarJWT } from "../helpers/generar_jwt.js";

export const ctrlLoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el email existe
    const user = await Usuario.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        message: "El email no existe",
      });
    }

    // Verificar la contraseña
    const passwordValido = await bcrypt.compare(password, user.password);

    if (!passwordValido) {
      return res.status(400).json({
        message: "La contraseña no es válida",
      });
    }

    // Generar el JWT
    const token = await generarJWT({ user: user.usuario_id });

    if (!token) {
      return res.status(400).json({
        message: "No tiene una sesion iniciada",
      });
    }

    return res.json({ token, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
>>>>>>> develop-romero-ezequiel:server/src/controllers/auth.controller.js
