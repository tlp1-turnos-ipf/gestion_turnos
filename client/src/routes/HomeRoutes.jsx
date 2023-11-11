import { Route, Routes } from "react-router-dom";
import { PrincipalPaciente } from "../components/main/PrincipalPaciente";
import { PrincipalAdmin } from "../components/main/PrincipalAdmin";
import { PrincipalDoctor } from "../components/main/PrincipalDoctor";

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/paciente" element={<PrincipalPaciente />} />
      <Route path="/administrador" element={<PrincipalAdmin />} />
      <Route path="/doctor" element={<PrincipalDoctor />} />
    </Routes>
  );
};
