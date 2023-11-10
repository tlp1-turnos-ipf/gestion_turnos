import { useContext } from "react";
import { useForm } from "../../hooks/auth/useForm";
import { AuthContext } from "../../context/AuthContext";
import { typeAuth } from "../../types/type";
import { login } from "../../services/auth/login";
import { useNavigate } from "react-router-dom";
import { rol } from "../../services/auth/rol";

export const FormLogin = () => {
  const { dispatchAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    form: datos,
    handleInputChange,
    reset,
  } = useForm({
    email: "",
    password: "",
  });

  // Envío de datos al servidor
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(datos);
      Swal.fire({
        icon: "success",
        title: "Excelente",
        text: "Iniciado con éxito",
      });
      dispatchAuth({
        type: typeAuth.LOGIN,
        payload: {
          data,
        },
      });

      const dataRol = await rol();

      reset();

      navigate(dataRol);
    } catch (error) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  return (
    <main>
      <section className="container-fluid fondo">
        <div className="fondo2">
          <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="row align-items-center g-lg-5 py-5">
              <div className="col-md-10 mx-auto col-lg-5">
                <form
                  className="p-4 p-md-3 border rounded-3 bg-white"
                  onSubmit={handleSubmit}
                >
                  <div className="m-3 text-center fw-bold d-flex justify-content-center align-items-center border-bottom">
                    <img
                      src="img/inicio_sesion/logo.png"
                      alt=""
                      width="100px"
                    />
                    <p>Inicio de Sesión</p>
                  </div>
                  <p>Ingresa tus datos</p>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control border-primary"
                      id="email"
                      placeholder="juan123"
                      name="email"
                      value={datos.email}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control border-primary"
                      name="password"
                      min={5}
                      max={15}
                      value={datos.password}
                      onChange={handleInputChange}
                      required
                    />
                    <label htmlFor="floatingPassword">Contraseña</label>
                  </div>
                  <button
                    type="submit"
                    className="w-100 btn btn-lg btn-primary my-1"
                  >
                    Iniciar Sesión
                  </button>
                  <a
                    href="/register"
                    className="w-100 btn btn-lg btn-secondary my-1"
                  >
                    Registrarse
                  </a>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
