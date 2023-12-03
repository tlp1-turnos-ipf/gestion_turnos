import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  return isAuth() ? children : <Navigate to={"/"} />;
};
