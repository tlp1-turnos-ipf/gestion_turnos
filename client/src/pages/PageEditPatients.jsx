import { AppEditEspeciality } from "../components/AppEditEspeciality";
import { AsideBurgerAdmin } from "../components/asideBurger/AsideBurgerAdmin";
import { NavBarAdmin } from "../components/navBar/NavBarAdmin";

export const PageEditPatients = () => {
  return (
    <>
      <AsideBurgerAdmin />
      <main className="container-fluid m-0 p-0">
        <div className="d-flex">
          <NavBarAdmin />
          <AppEditEspeciality />
        </div>
      </main>
    </>
  );
};
