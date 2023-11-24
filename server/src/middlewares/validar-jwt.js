import jwt from "jsonwebtoken";
import { environments } from "../config/environments";

//Validar JWT
export const validarJWT = (req, res, next) => {
  // Leer el token
  const token = req.headers("Authorization");

  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "No hay token en la petición",
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
      message: "Token no válido",
    });
  }
};

//Validación del token
export const validarJWTWebsocket = (token) => {
  try {
    const { uid } = jwt.verify(token, environments.SECRET);

    if (uid) {
      return [true, uid];
    }
  } catch (error) {
    console.log(error);
    return [false, null];
  }
};
