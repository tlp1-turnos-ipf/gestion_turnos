import { User } from "./User";
import { AddBoton } from "./botons/AddBoton";
import { FilterDoctor } from "./filters/FilterDoctor";
import { ListDoctors } from "./lists/ListDoctors";

export const AppDoctors = () => {
  return (
    <section
      className="w-100"
      style={{ backgroundColor: "rgb(240, 240, 240)" }}
    >
      <User />
      <div className="my-3 shadow p-3 m-5 bg-body rounded border d-flex flex-wrap justify-content-between">
        <AddBoton route={"/doctors/create"}>Agregar Doctor</AddBoton>
        <FilterDoctor />
      </div>
      <ListDoctors />
    </section>
  );
};
