import { useForm } from "../../hooks/auth/useForm";
import { useNavigate } from "react-router-dom";
import { fetchPerson } from "../../api/personApi";
import { fetchPatient } from "../../api/patientApi";
import { fetchUser } from "../../api/userApi";

export const FormRegister = () => {
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
    discapacidad: "",
    nombre_usuario: "",
    email: "",
    password: "",
    confirmPassword: "",
    rol: 3,
  });

  // Envío de datos al servidor
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataPerson = await fetchPerson("api/persona", "POST", datos);

    if (dataPerson.person) {
      await fetchUser("api/user", "POST", datos);
      const dataPatient = await fetchPatient("api/paciente", "POST", datos);
      Swal.fire({
        icon: "success",
        title: "Excellent",
        text: dataPatient.message,
      });
      navigate("/auth/login");
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
    <main>
      <section className="container-fluid fondo">
        <div className="fondo2">
          <div className="container px-4 py-5">
            <form
              className="p-1 p-md-4 border rounded-3 bg-white"
              onSubmit={handleSubmit}
            >
              <div className="m-1 fw-bold d-flex justify-content-center border-bottom">
                <p className="fs-5">
                  <img src="/img/inicio_sesion/logo.png" alt="" width="30px" />
                  Registrarse
                </p>
              </div>
              <div className="row mb-2">
                <div className="col form-floating m-1 inputForm">
                  <input
                    type="text"
                    className="form-control border-secondary"
                    id="nombres"
                    placeholder="juan"
                    name="nombres"
                    required
                    value={datos.nombres}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="nombre" className="mx-1">
                    Nombres
                  </label>
                </div>
                <div className="col form-floating m-1 inputForm">
                  <input
                    type="text"
                    className="form-control border-secondary"
                    id="apellidos"
                    name="apellidos"
                    required
                    value={datos.apellidos}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="apellido" className="mx-1">
                    Apellidos
                  </label>
                </div>
                <div className="col form-floating m-1 inputForm">
                  <input
                    type="date"
                    className="form-control border-secondary"
                    id="fecha_nac"
                    placeholder="00/00/0000"
                    name="fecha_nac"
                    required
                    value={datos.fecha_nac}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="fecha" className="mx-1">
                    Fecha de Nacimiento
                  </label>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col form-floating m-1 inputForm">
                  <input
                    type="number"
                    className="form-control border-secondary"
                    id="dni"
                    placeholder=""
                    name="dni"
                    required
                    value={datos.dni}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="dni" className="mx-1">
                    DNI
                  </label>
                </div>
                <div className="col form-floating m-1 inputForm">
                  <input
                    type="text"
                    className="form-control border-secondary"
                    id="direccion"
                    placeholder="mz 71 cs 30"
                    name="direccion"
                    required
                    value={datos.direccion}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="direccion" className="mx-1">
                    Dirección
                  </label>
                </div>
                <div className="col form-floating m-1 inputForm">
                  <input
                    type="number"
                    className="form-control border-secondary"
                    id="telefono"
                    placeholder={3704332211}
                    name="telefono"
                    required
                    value={datos.telefono}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="telefono" className="mx-1">
                    Telefóno
                  </label>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col form-floating m-1 inputForm">
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
                <div className="col form-floating m-1 inputForm">
                  <select
                    name="discapacidad"
                    id="discapacidad"
                    className="form-select border-secondary"
                    aria-label="discapacidad"
                    required
                    onChange={handleInputChange}
                    value={datos.discapacidad}
                  >
                    <option value="#">Posee alguna discapacidad?</option>
                    <option value={1}>Si</option>
                    <option value={2}>No</option>
                  </select>
                </div>
              </div>
              <div className="m-1 fw-bold d-flex justify-content-center border-bottom">
                <p className="fs-5">Cuenta</p>
              </div>
              <div className="row">
                <div className="col form-floating m-1 inputForm">
                  <input
                    type="text"
                    className="form-control border-secondary"
                    id="nombre_usuario"
                    placeholder={3704332211}
                    name="nombre_usuario"
                    required
                    value={datos.nombre_usuario}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="nombre_usuario" className="mx-1">
                    Nombre de Usuario
                  </label>
                </div>
                <div className="col form-floating m-1 inputForm">
                  <input
                    type="email"
                    className="form-control border-secondary"
                    id="email"
                    placeholder="example@gmail.com"
                    name="email"
                    required
                    value={datos.email}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="email" className="mx-1">
                    Email
                  </label>
                </div>
                <div className="col form-floating m-1 inputForm">
                  <input
                    type="password"
                    className="form-control border-secondary"
                    id="password"
                    placeholder={3704332211}
                    name="password"
                    required
                    value={datos.password}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="password" className="mx-1">
                    Contraseña
                  </label>
                </div>
                <div className="col form-floating m-1 inputForm mb-2">
                  <input
                    type="password"
                    className="form-control border-secondary"
                    id="confirmPassword"
                    placeholder={3704332211}
                    name="confirmPassword"
                    required
                    value={datos.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="confirmPassword" className="mx-1">
                    Confirmar Contraseña
                  </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                  Continuar
                </button>
                <hr className="my-4" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
