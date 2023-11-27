// AdministradorPage.jsx
import React from 'react';

const HeaderAdministrador = () => {
  const toggleMenu = () =>{

  };
  return (
    <div lang="en">
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles/pantalla_principal.css" />
        <link rel="stylesheet" href="/styles/estilo_tablas.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossOrigin="anonymous"
        />
        <title>Administradores</title>
      </div>

      <div style={{ backgroundColor: 'rgb(238, 241, 255)' }} className="pb-1">
        <button className="burger" type="button" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-close"></i>
        </button>

        <aside>
        <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item py-3">
          <a
              href="/administrador"
              className="d-flex align-items-center text-white text-decoration-none border-bottom py-2"
            >
              <img
                src="/img/inicio_sesion/logo.png"
                alt="logo.png"
                width="70px"
              />
              <span className="fs-4">San Antonio</span>
            </a>
        </li>
        <li className="nav-item py-1">
          <a
            href="/lista_pacientes_completos"
            className="nav-link text-white"
            aria-current="page"
          >
            <i className="fa fa-wheelchair mx-1" aria-hidden="true"></i>
            Lista de Pacientes
          </a>
        </li>
        <li className="nav-item py-1">
          <a
            href="/crear_paciente"
            className="nav-link text-white"
            aria-current="page"
          >
            <i className="fa fa-wheelchair-alt mx-1" aria-hidden="true"></i>
            Agregar Paciente
          </a>
        </li>
        <li className="nav-item py-1">
          <a
            href="/lista_doctores_completo"
            className="nav-link text-white"
            aria-current="page"
          >
            <i className="fa fa-user-md mx-1" aria-hidden="true"></i>
            Lista de Doctores
          </a>
        </li>
        <li className="nav-item py-1">
          <a
            href="/crear_doctor"
            className="nav-link text-white"
            aria-current="page"
          >
            <i className="fa fa-stethoscope mx-1" aria-hidden="true"></i>
            Agregar Doctor
          </a>
        </li>
        <li className="nav-item text-center">
          <a
            href="/"
            className="text-white btn btn-primary"
          >
            Cerrar Sesion
          </a>
        </li>
      </ul>
        </aside>

        <main className="container-fluid m-0 p-0">
          <div className="d-flex">
            <nav
              className="responsive"
              style={{
                background:
                  'linear-gradient(100deg, rgba(4, 0, 61, 0.945), 70%, rgba(0, 0, 138, 0.9))',
              }}
              id="admin"
            >
              <div
                className="d-flex flex-column flex-shrink-0 px-3"
                style={{ width: '240px', height: '100vh', display: 'none' }}
              >
                <a
              href="/administrador"
              className="d-flex align-items-center text-white text-decoration-none border-bottom py-2"
            >
              <img
                src="/img/inicio_sesion/logo.png"
                alt="logo.png"
                width="70px"
              />
              <span className="fs-4">San Antonio</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item py-1">
                <a
                  href="/lista_pacientes_completos"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  <i className="fa fa-wheelchair mx-1" aria-hidden="true"></i>
                  Lista de Pacientes
                </a>
              </li>
              <li className="nav-item py-1">
                <a
                  href="/crear_paciente"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  <i className="fa fa-wheelchair-alt mx-1" aria-hidden="true"></i>
                  Agregar Paciente
                </a>
              </li>
              <li className="nav-item py-1">
                <a
                  href="/lista_doctores_completo"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  <i className="fa fa-user-md mx-1" aria-hidden="true"></i>
                  Lista de Doctores
                </a>
              </li>
              <li className="nav-item py-1">
                <a
                  href="/crear_doctor"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  <i className="fa fa-stethoscope mx-1" aria-hidden="true"></i>
                  Agregar Doctor
                </a>
              </li>
              <li className="nav-item text-center">
                <a
                  href="/"
                  className="text-white btn btn-primary"
                >
                  Cerrar Sesion
                </a>
              </li>
              </ul>
              </div>
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeaderAdministrador;
