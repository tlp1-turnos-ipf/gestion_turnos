export const rol = async () => {
  const resp = await fetch("http://localhost:3000/rol/user", {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });

  if (!resp.ok) {
    const { message } = await resp.json();
    throw { message };
  }

  const { roles } = await resp.json();
  console.log(roles);

  return roles;
};
