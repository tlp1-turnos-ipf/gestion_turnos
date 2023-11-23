import { useContext, useEffect } from "react";
import { EspecialityContext } from "../context/EspecilityContext";
import { AsideBurgerAdmin } from "../components/asideBurger/AsideBurgerAdmin";
import { NavBarAdmin } from "../components/navBar/NavBarAdmin";
import { AppEspeciality } from "../components/AppEspeciality";

export const PageEspecility = () => {
  const { fetchGetAllEspeciality } = useContext(EspecialityContext);

  useEffect(() => {
    fetchGetAllEspeciality(); // Llamamos a la función asíncrona cuando el componente se monta
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <>
      <AsideBurgerAdmin />
      <main className="container-fluid m-0 p-0">
        <div className="d-flex">
          <NavBarAdmin />
          <AppEspeciality />
        </div>
      </main>
    </>
  );
};
