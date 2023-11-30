import { AppCreatePatient } from "../../components/AppCreatePatient";
import { AsideBurgerAdmin } from "../../components/asideBurger/AsideBurgerAdmin";
import { NavBarAdmin } from "../../components/navBar/NavBarAdmin";

export const PageCreatePatients = () => {
  return (
    <>
      <AsideBurgerAdmin />
      <main className="container-fluid m-0 p-0">
        <div className="d-flex">
          <NavBarAdmin />
          <AppCreatePatient />
        </div>
      </main>
    </>
  );
};
