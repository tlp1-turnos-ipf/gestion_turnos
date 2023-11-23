import { env } from "../config/config";

export const fetchUser = async (route, method, payload) => {
  const url = `${env.SERVER_PATH}/${route}`;

  if (method == "POST") {
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
