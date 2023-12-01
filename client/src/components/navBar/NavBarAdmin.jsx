import { Link } from "react-router-dom";
import { BotonLogout } from "../botons/BotonLogout";
export const NavBarAdmin = () => {
  return (
    <>
      <nav
        className="responsive"
        id="admin"
        style={{
          background:
            "linear-gradient(100deg, rgb(2, 0, 31), 70%, rgb(0, 0, 87))",
        }}
      >
        <div
          className="d-flex flex-column flex-shrink-0 px-3"
          style={{ width: 240, height: "100vh", display: "none" }}
        >
          <Link
            to="/dashboard"
            className="d-flex align-items-center text-white text-decoration-none border-bottom py-2"
          >
            <img
              src="/img/inicio_sesion/logo.png"
              alt="logo.png"
              width="70px"
            />
            <span className="fs-4">San Antonio</span>
          </Link>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item py-1">
              <Link
                to="/patients"
                className="nav-link text-white"
                aria-current="page"
              >
                <i className="fa fa-wheelchair mx-1" aria-hidden="true" />
                Lista de Pacientes
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link
                to="/patients/create"
                className="nav-link text-white"
                aria-current="page"
              >
                <i className="fa fa-wheelchair-alt mx-1" aria-hidden="true" />
                Agregar Paciente
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link
                to="/doctors"
                className="nav-link text-white"
                aria-current="page"
              >
                <i className="fa fa-user-md mx-1" aria-hidden="true" />
                Lista de Doctores
              </Link>
            </li>
            <li className="nav-item py-1">
              <Link
                to="/patients/create"
                className="nav-link text-white"
                aria-current="page"
              >
                <i className="fa fa-wheelchair-alt mx-1" aria-hidden="true" />
                Agregar Doctor
              </Link>
            </li>

            <li className="nav-item text-center">
              <BotonLogout />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
