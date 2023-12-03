import { AppCreateEspeciality } from "../components/AppCreateEspeciality";
import { AsideBurgerAdmin } from "../components/asideBurger/AsideBurgerAdmin";
import { NavBarAdmin } from "../components/navBar/NavBarAdmin";

export const PageCreateEspeciality = () => {
  return (
    <>
      <AsideBurgerAdmin />
      <main className="container-fluid m-0 p-0">
        <div className="d-flex">
          <NavBarAdmin />
          <AppCreateEspeciality />
        </div>
      </main>
    </>
  );
};
