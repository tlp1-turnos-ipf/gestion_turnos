import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const HomeRoutes = () => {
  const { auth } = useContext(AuthContext);
  return <Routes></Routes>;
};
