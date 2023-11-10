export const login = async (datos) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  };

  const resp = await fetch("http://localhost:3000/auth/login", options);

  if (!resp.ok) {
    const { message } = await resp.json();
    throw { message };
  }

  const { token } = await resp.json();

  window.localStorage.setItem("token", token);
  return token;
};
