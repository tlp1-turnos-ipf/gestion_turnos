import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/auth/useForm";
import { User } from "./User";
import { useEffect, useState } from "react";
import { fetchPatient } from "../api/patientApi";
import { fetchPerson } from "./../api/personApi";

export const AppEditPatient = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [patientToEdit, setPatientToEdit] = useState({});

  const fetchGetOnePatient = async () => {
    try {
      const data = await fetchPatient(`api/pacientes/${id}`, "GET");
      setPatientToEdit(data);
    } catch (error) {
      console.error("Error al obtener datos del servidor:", error);
    }
  };

  useEffect(() => {
    fetchGetOnePatient();
  }, []);

  const {
    form: datos,
    handleInputChange,
    reset,
  } = useForm({
    nombres: "",
    apellidos: "",
    fecha_nac: "",
    dni: "",
    direccion: "",
    telefono: "",
    sexo: "",
  });
  // Envío de datos al servidor
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataPatient = await fetchPerson(`api/pacientes/${id}`, "PUT", datos);

    if (dataPatient.person) {
      Swal.fire({
        icon: "success",
        title: "Excellent",
        text: dataPatient.message,
      });
      navigate("/patients");
      reset();
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: dataPatient.message,
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
              Editar Paciente
            </p>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="form-floating m-2 inputForm">
              <input
                type="text"
                className="form-control border-secondary"
                id="nombres"
                name="nombres"
                required
                value={patientToEdit.nombres}
                onChange={handleInputChange}
              />
              <label htmlFor="nombres">Nombres</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="text"
                className="form-control border-secondary"
                id="apellidos"
                placeholder="Perez"
                name="apellidos"
                required
                value={patientToEdit.apellidos}
                onChange={handleInputChange}
              />
              <label htmlFor="apellidos">Apellidos</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="date"
                className="form-control border-secondary"
                id="fecha_nac"
                name="fecha_nac"
                required
                value={patientToEdit.fecha_nac}
                onChange={handleInputChange}
              />
              <label htmlFor="fecha_nac">Fecha de Nacimiento</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="number"
                className="form-control border-secondary"
                id="dni"
                name="dni"
                required
                value={patientToEdit.dni}
                onChange={handleInputChange}
              />
              <label htmlFor="dni">DNI</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="text"
                className="form-control border-secondary"
                id="direccion"
                name="direccion"
                required
                value={patientToEdit.direccion}
                onChange={handleInputChange}
              />
              <label htmlFor="direccion">Dirección</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="number"
                className="form-control border-secondary"
                id="telefono"
                name="telefono"
                required
                value={patientToEdit.telefono}
                onChange={handleInputChange}
              />
              <label htmlFor="telefono">Telefóno</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <select
                name="sexo"
                id="sexo"
                className="form-select border-secondary"
                aria-label="Sexos"
                required
                onChange={handleInputChange}
                value={patientToEdit.sexo}
              >
                <option value="">Elegir el Sexo</option>
                <option value={1}>Masculino</option>
                <option value={2}>Femenino</option>
                <option value={3}>Otros</option>
              </select>
            </div>
          </div>

          <hr className="my-4" />

          <div className="d-flex justify-content-center">
            <Link to="/patients" className="btn btn-lg btn-secondary mx-2">
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
