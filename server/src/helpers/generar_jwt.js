import jwt from "jsonwebtoken";

const generarJWT = (payload) => {
  return new Promise((resolve, reject) => {
    // Se firma el token
    jwt.sign(
      payload,
      process.env.SECRET_KEY,

      (err, token) => {
        if (err) {
          reject("No se pudo generar el JWT");
        }
        resolve({ token });
      }
    );
  });
};

export { generarJWT };
