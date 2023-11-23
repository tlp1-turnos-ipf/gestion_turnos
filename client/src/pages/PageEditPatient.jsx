import { AppEditPatient } from "../components/AppEditPatient";
import { AsideBurgerAdmin } from "../components/asideBurger/AsideBurgerAdmin";
import { NavBarAdmin } from "../components/navBar/NavBarAdmin";

export const PageEditPatient = () => {
  return (
    <>
      <AsideBurgerAdmin />
      <main className="container-fluid m-0 p-0">
        <div className="d-flex">
          <NavBarAdmin />
          <AppEditPatient />
        </div>
      </main>
    </>
  );
};
