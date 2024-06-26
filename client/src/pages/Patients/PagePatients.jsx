import { useContext, useEffect } from "react";
import { AppPatients } from "../../components/AppPatients";
import { AsideBurgerAdmin } from "../../components/asideBurger/AsideBurgerAdmin";
import { NavBarAdmin } from "../../components/navBar/NavBarAdmin";
import { PatientContext } from "../../context/PatientContext";

export const PagePatients = () => {
  const { fetchData } = useContext(PatientContext);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <AsideBurgerAdmin />
      <main className="container-fluid m-0 p-0">
        <div className="d-flex">
          <NavBarAdmin />
          <AppPatients />
        </div>
      </main>
    </>
  );
};
