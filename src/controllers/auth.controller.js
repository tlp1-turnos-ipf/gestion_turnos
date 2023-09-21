import { createJWT } from '../helpers/jsonwebtoken.js'
import jwt from 'jsonwebtoken'
import { environments } from '../config/environments.js'
import { Usuario } from '../models/usuario.model.js'
import bcrypt from "bcrypt";

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

// es un controlador que voy a usar para validar si el token es válido.
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