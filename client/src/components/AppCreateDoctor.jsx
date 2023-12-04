import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/auth/useForm";
import { User } from "./User";
import { fetchPerson } from "../api/personApi";
import { fetchUser } from "./../api/userApi";
import { fetchDoctor } from "../api/doctorApi";
import { useEffect, useState } from "react";
import { fetchPatient } from "../api/patientApi";

export const AppCreateDoctor = () => {
  const [especialidadState, setEspecialidadState] = useState([]);

  const obtenerEspecialidad = async () => {
    const esp = await fetchPatient("api/especialidad", "GET", "");
    setEspecialidadState(esp);
    console.log(especialidadState);
  };

  useEffect(() => {
    obtenerEspecialidad();
  }, []);

  const navigate = useNavigate();
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
    especialidad_id: "",
    nombre_usuario: "",
    email: "",
    password: "",
    confirmPassword: "",
    rol: 4,
  });

  // Envío de datos al servidor
  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataPerson = await fetchPerson("api/persona", "POST", datos);

    if (dataPerson.person) {
      await fetchUser("api/user", "POST", datos);
      const dataDoctor = await fetchDoctor("api/doctor", "POST", datos);
      Swal.fire({
        icon: "success",
        title: "Excellent",
        text: dataDoctor.message,
      });
      navigate("/doctors");
      reset();
    } else {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: dataPerson.message,
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
              Agregar Doctor
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
                value={datos.nombres}
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
                value={datos.apellidos}
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
                value={datos.fecha_nac}
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
                value={datos.dni}
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
                value={datos.direccion}
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
                value={datos.telefono}
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
                value={datos.sexo}
              >
                <option value="">Elegir el Sexo</option>
                <option value={1}>Masculino</option>
                <option value={2}>Femenino</option>
                <option value={3}>Otros</option>
              </select>
            </div>
            <div className="form-floating m-2 inputForm">
              <select
                name="especialidad_id"
                id="especialidad_id"
                className="form-select border-secondary"
                aria-label="especialidad_id"
                required
                onChange={handleInputChange}
                value={datos.especialidad_id}
              >
                <option value="#">Seleccione su especialidad</option>
                <option value="1">Oftalmólogo</option>
                <option value="2">Cardiólogo</option>
                <option value="3">Urólogo</option>
              </select>
            </div>
          </div>
          <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
            <img src="/img/inicio_sesion/logo.png" alt="" width="30px" />
            <p className="fs-5">Cuenta</p>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="form-floating m-2 inputForm">
              <input
                type="text"
                className="form-control border-secondary"
                id="nombre_usuario"
                name="nombre_usuario"
                required
                value={datos.nombre_usuario}
                onChange={handleInputChange}
              />
              <label htmlFor="nombre_usuario">Nombre de Usuario</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="email"
                className="form-control border-secondary"
                id="email"
                name="email"
                required
                value={datos.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating m-2 inputForm">
              <input
                type="password"
                className="form-control border-secondary"
                id="password"
                name="password"
                required
                value={datos.password}
                onChange={handleInputChange}
              />
              <label htmlFor="password">Contraseña</label>
            </div>
            <div className="form-floating m-2 inputForm mb-5">
              <input
                type="password"
                className="form-control border-secondary"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={datos.confirmPassword}
                onChange={handleInputChange}
              />
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            </div>
            <hr className="my-4" />
          </div>
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
