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
