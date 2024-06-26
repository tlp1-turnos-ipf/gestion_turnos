import { Index } from ".";
import { AsideBurgerAdmin } from "../components/asideBurger/AsideBurgerAdmin";
import { NavBarAdmin } from "../components/navBar/NavBarAdmin";
import { NavWindowAdmin } from "../components/navWindows/NavWindowAdmin";

export const Dashboard = () => {
  // Obtén el usuario del almacenamiento local
  const user = JSON.parse(localStorage.getItem("user"));

  // Determina la ruta basándote en el número del rol
  let routeElement;

  switch (user?.rol) {
    case 1:
      routeElement = (
        <>
          <AsideBurgerAdmin />
          <main className="container-fluid m-0 p-0">
            <div className="d-flex">
              <NavBarAdmin />
              <NavWindowAdmin />
            </div>
          </main>
        </>
      );
      break;
    case 3:
      routeElement = (
        <>
          <AsideBurgerAdmin />
          <main className="container-fluid m-0 p-0">
            <div className="d-flex">
              <NavBarAdmin />
              <h1>Pantalla de Pacientes</h1>
            </div>
          </main>
        </>
      );
      break;

    default:
      // Manejar cualquier otro caso o mostrar una ruta predeterminada
      routeElement = <Index />;
  }

  //Retorno
  return routeElement;
};
