import { useContext } from "react";
import { EspecialityContext } from "../../context/EspecilityContext";
import { fetchPatient } from "../../api/patientApi";

export const ListEspeciality = () => {
  const { especialities, deleteEsp } = useContext(EspecialityContext);

  const DeleteEspeciality = (id) => {
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
            const data = await fetchPatient(`api/especialidad/${id}`, "DELETE");
            deleteEsp(id);
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
            console.error("Error al eliminar la especialidad:", error);
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
            <th scope="col">Nombre Especialidad</th>
            <th scope="col" colSpan={2}>
              Funciones
            </th>
          </tr>
        </thead>
        <tbody className="d-flex-reverse align-items-center justify-content-center">
          {especialities.length === 0 ? (
            <tr>
              <td colSpan={3}>No hay Especialidades</td>
            </tr>
          ) : (
            especialities.map((especiality) => (
              <tr key={especiality.especialidad_id}>
                <td>{especiality.descripcion_especialidad}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm mx-1"
                    onClick={() =>
                      DeleteEspeciality(especiality.especialidad_id)
                    }
                  >
                    Eliminar
                  </button>
                  <button
                    // onClick={() =>
                    //   navigate(
                    //     "/especiality/edit/" +
                    //       patient.Usuario.Persona.persona_id
                    //   )
                    // }
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
