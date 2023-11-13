import { login } from "./login";

export const register = async (datos) => {
  //Verifica que las contraseñas coincidan
  if (datos.password !== datos.confirmPassword) {
    const message = "Las contraseñas no coinciden";
    throw { message };
  }

  //Options
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };

  //SE CREA LA PERSONA
  const responseIdPersona = await fetch(
    "http://localhost:3000/api/persona/registro",
    options
  );

  //VERIFICA QUE NO HAYA ERRORES
  if (!responseIdPersona.ok) {
    const { message } = await responseIdPersona.json();
    throw { message };
  }

  // SE CREA EL USUARIO
  const responseUsuario = await fetch(
    "http://localhost:3000/api/usuario",
    options
  );

  //VERIFICA QUE NO HAYA ERRORES
  if (!responseUsuario.ok) {
    const { message } = await responseUsuario.json();
    throw { message };
  }

  //CREA EL PACIENTE
  const responsePaciente = await fetch(
    "http://localhost:3000/api/paciente",
    options
  );

  //VERIFICA QUE NO HAYA ERRORES
  if (!responsePaciente.ok) {
    const { message } = await responsePaciente.json();
    throw { message };
  }

  login(datos);

  return;
};
