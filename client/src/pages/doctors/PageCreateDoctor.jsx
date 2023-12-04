import { AppCreateDoctor } from "../../components/AppCreateDoctor";
import { AsideBurgerAdmin } from "../../components/asideBurger/AsideBurgerAdmin";
import { NavBarAdmin } from "../../components/navBar/NavBarAdmin";

export const PageCreateDoctor = () => {
  return (
    <>
      <AsideBurgerAdmin />
      <main className="container-fluid m-0 p-0">
        <div className="d-flex">
          <NavBarAdmin />
          <AppCreateDoctor />
        </div>
      </main>
    </>
  );
};
