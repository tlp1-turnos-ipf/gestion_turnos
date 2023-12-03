import { Link, useNavigate } from "react-router-dom";
import { User } from "./User";
import { fetchPatient } from "../api/patientApi";
import { useForm } from "../hooks/auth/useForm";
import { useContext } from "react";
import { EspecialityContext } from "../context/EspecilityContext";

export const AppCreateEspeciality = () => {
  const { createEspeciality } = useContext(EspecialityContext);
  const navigate = useNavigate();
  const {
    form: datos,
    handleInputChange,
    reset,
  } = useForm({
    descripcion_especialidad: "",
  });

  // Envío de datos al servidor
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataEsp = await fetchPatient("api/especialidad", "POST", datos);

    if (dataEsp) {
      createEspeciality(datos);
      Swal.fire({
        icon: "success",
        title: "Excellent",
        text: dataEsp.message,
      });
      navigate("/especiality");
      reset();
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: dataEsp.message,
      });
    }
  };

  return (
    <section
      className="w-100"
      style={{ backgroundColor: "rgb(240, 240, 240)" }}
    >
      <User />
      <div className="container px-4 py-1">
        <form className="p-1 p-md-4" onSubmit={handleSubmit}>
          <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
            <p className="fs-5">
              <img src="/img/inicio_sesion/logo.png" alt="" width="30px" />
              Agregar Especialidad
            </p>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="form-floating m-2 inputForm">
              <input
                type="text"
                className="form-control border-secondary"
                id="descripcion_especialidad"
                name="descripcion_especialidad"
                required
                value={datos.descripcion_especialidad}
                onChange={handleInputChange}
              />
              <label htmlFor="descripcion_especialidad">
                Nombre Especialidad
              </label>
            </div>

            <hr className="my-4" />
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/especiality" className="btn btn-lg btn-secondary mx-2">
              Volver
            </Link>
            <button className="btn btn-lg btn-primary mx-2" type="submit">
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
