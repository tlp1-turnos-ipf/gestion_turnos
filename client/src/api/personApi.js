import { env } from "../config/config";

export const fetchPerson = async (route, method, payload) => {
  const url = `${env.SERVER_PATH}/${route}`;

  if (method == "POST") {
    //Verifica que las contraseñas coincidan
    if (payload.password !== payload.confirmPassword) {
      const message = "Las contraseñas no coinciden";
      return { message };
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  }
};
