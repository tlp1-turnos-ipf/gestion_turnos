import { User } from "./User";
import { AddPatientBoton } from "./botons/AddPatientBoton";
import { FilterPaciente } from "./filters/FilterPaciente";
import { ListPatients } from "./lists/ListPatients";

export const AppPatients = () => {
  return (
    <section
      className="w-100"
      style={{ backgroundColor: "rgb(240, 240, 240)" }}
    >
      <User />
      <div className="my-3 shadow p-3 m-5 bg-body rounded border d-flex flex-wrap justify-content-between">
        <AddPatientBoton />
        <FilterPaciente />
      </div>
      <ListPatients />
    </section>
  );
};
