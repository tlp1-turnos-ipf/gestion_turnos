import { User } from "./User";
import { AddBoton } from "./botons/AddBoton";
import { FilterEspeciality } from "./filters/FilterEspeciality";
import { ListEspeciality } from "./lists/ListEspeciality";

export const AppEspeciality = () => {
  return (
    <section
      className="w-100"
      style={{ backgroundColor: "rgb(240, 240, 240)" }}
    >
      <User />
      <div className="my-3 shadow p-3 m-5 bg-body rounded border d-flex flex-wrap justify-content-between">
        <AddBoton route={"/especiality/create"}>Agregar Especialidad</AddBoton>
        <FilterEspeciality />
      </div>
      <ListEspeciality />
    </section>
  );
};
