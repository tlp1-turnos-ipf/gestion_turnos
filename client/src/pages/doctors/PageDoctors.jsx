import { useContext, useEffect } from "react";
import { AsideBurgerAdmin } from "../../components/asideBurger/AsideBurgerAdmin";
import { NavBarAdmin } from "../../components/navBar/NavBarAdmin";
import { AppDoctors } from "../../components/AppDoctors";
import { DoctorContext } from "../../context/DoctorContext";

export const PageDoctors = () => {
  const { fetchDataDoctor } = useContext(DoctorContext);
  useEffect(() => {
    fetchDataDoctor();
  }, []);

  return (
    <>
      <AsideBurgerAdmin />
      <main className="container-fluid m-0 p-0">
        <div className="d-flex">
          <NavBarAdmin />
          <AppDoctors />
        </div>
      </main>
    </>
  );
};
