import { Link } from "react-router-dom";

export const AddPatientBoton = () => {
  return (
    <Link to="/patients/create" className="btn btn-primary text-light m-1">
      Agregar Paciente
    </Link>
  );
};
