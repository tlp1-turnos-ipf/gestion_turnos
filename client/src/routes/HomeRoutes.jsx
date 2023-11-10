import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { PaginaPrincipal } from "../pages/PaginaPrincipal";
import { AuthContext } from "../context/AuthContext";

export const HomeRoutes = () => {
  const { auth } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/paciente" element={<PaginaPrincipal />} />
      <Route path="/administrador" element={<PaginaPrincipal />} />
      <Route path="/doctor" element={<PaginaPrincipal />} />
    </Routes>
  );
};
