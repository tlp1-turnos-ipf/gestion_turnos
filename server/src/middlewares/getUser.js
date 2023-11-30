import { environments } from "../config/environments.js";
import { getUserById } from "../functions/User.js";
import jwt from "jsonwebtoken";

export const getUser = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log("Mi token", token);

  if (!token) {
    return res.sendStatus(404);
  }

  const { user: userId } = jwt.verify(token, environments.SECRET);

  const user = await getUserById(userId);

  console.log(user);

  if (!user) {
    return res.sendStatus(403);
  }

  req.user = user;
  next();
};
