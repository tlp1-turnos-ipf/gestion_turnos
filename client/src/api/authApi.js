import { env } from "../config/config";

export const fetchAuth = async (route, method, payload) => {
  const url = `${env.SERVER_PATH}/${route}`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };

  if (method === "GET") {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } else {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
};
