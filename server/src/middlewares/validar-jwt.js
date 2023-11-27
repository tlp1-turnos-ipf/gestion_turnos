import jwt from "jsonwebtoken";
import { environments } from "../config/environments.js";

export const validarJWT = (req, res, next) => {
  // Leer el token
  const token = req.headers("Authorization");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la petición",
    });
  }

  try {
    const { uid } = jwt.verify(token, environments.SECRET);
    req.uid = uid;

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: "Token no válido",
    });
  }
};

export const validarJWTWebsocket = (token) => {
  try {
    const { user } = jwt.verify(token, environments.SECRET);

    if (user) {
      return [true, user];
    }
  } catch (error) {
    console.log(error);
    return [false, null];
  }
};
