import { useContext } from "react";
import { PatientContext } from "../../context/PatientContext";
import { fetchPatient } from "../../api/patientApi";
import { useNavigate } from "react-router-dom";

export const ListPatients = () => {
  const { patients, handleDone } = useContext(PatientContext);

  const navigate = useNavigate();

  const DeletePatient = (id) => {
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
            const data = await fetchPatient(`api/pacientes/${id}`, "DELETE");
            handleDone(id);
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
          {patients.length === 0 ? (
            <tr>
              <td colSpan={4}>No hay Pacientes</td>
            </tr>
          ) : (
            patients.map((patient) => (
              <tr key={patient.paciente_id}>
                <td>{patient.Usuario.Persona.dni}</td>
                <td>
                  {patient.Usuario.Persona.nombres}{" "}
                  {patient.Usuario.Persona.apellidos}
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() => DeletePatient(patient.Usuario.usuario_id)}
                  >
                    Eliminar
                  </button>
                  <button
                    onClick={() =>
                      navigate(
                        "/patients/edit/" + patient.Usuario.Persona.persona_id
                      )
                    }
                    className="btn btn-warning btn-sm"
                  >
                    Editar
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
