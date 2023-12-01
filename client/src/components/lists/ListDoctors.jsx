import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPatient } from "../../api/patientApi";
import { DoctorContext } from "../../context/DoctorContext";

export const ListDoctors = () => {
  const { doctors, handleDoneDoctor } = useContext(DoctorContext);

  const navigate = useNavigate();

  const DeleteDoctor = (id) => {
    //Ventana Emergente para antes de eliminar un registro
    Swal.fire({
      icon: "warning",
      title: "¿Estás seguro de eliminar el registro?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        (async () => {
          try {
            const data = await fetchPatient(`api/doctor/${id}`, "DELETE");
            handleDoneDoctor(id);
            if (data) {
              Swal.fire({
                icon: "success",
                title: "Excelente",
                text: data.message,
              });
            } else {
              console.log(data.message);
            }
          } catch (error) {
            console.error("Error al eliminar el paciente:", error);
          }
        })();
      }
    });
  };

  return (
    <div className="main-table shadow m-5 bg-body rounded border">
      <table className="table table-striped rounded text-center">
        <thead className="table-dark">
          <tr>
            <th scope="col">DNI</th>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col" colSpan={2}>
              Funciones
            </th>
          </tr>
        </thead>
        <tbody className="d-flex-reverse align-items-center justify-content-center">
          {doctors.length === 0 ? (
            <tr>
              <td colSpan={4}>No hay Doctores</td>
            </tr>
          ) : (
            doctors.map((doctor) => (
              <tr key={doctor.paciente_id}>
                <td>{doctor.Usuario.Persona.dni}</td>
                <td>
                  {doctor.Usuario.Persona.nombres}{" "}
                  {doctor.Usuario.Persona.apellidos}
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => DeleteDoctor(doctor.Usuario.usuario_id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
