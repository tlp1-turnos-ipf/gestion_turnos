import { Route, Routes } from "react-router-dom";
import { PrincipalPaciente } from "../pages/main/PrincipalPaciente";
import { PrincipalAdmin } from "../pages/main/PrincipalAdmin";
import { PrincipalDoctor } from "../pages/main/PrincipalDoctor";

export const HomeRoutes = () => {
  // Obtén el usuario del almacenamiento local
  const user = JSON.parse(localStorage.getItem("user"));

  // Determina la ruta basándote en el número del rol
  let routeElement;

  switch (user?.rol) {
    case 1:
      routeElement = <Route path="/dashboard" element={<PrincipalAdmin />} />;
      break;
    case 3:
      routeElement = (
        <Route path="/dashboard" element={<PrincipalPaciente />} />
      );
      break;
    case 4:
      routeElement = <Route path="/dashboard" element={<PrincipalDoctor />} />;
      break;
    default:
      // Manejar cualquier otro caso o mostrar una ruta predeterminada
      routeElement = <Route path="/dashboard" element={<PrincipalAdmin />} />;
  }

  return <Routes>{routeElement}</Routes>;
};
