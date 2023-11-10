import React from "react";

const Header_paciente = () => {
    return (
        <body style={{backgroundColor: 'rgb(238, 241, 255)'}} className="pb-1">
    <button className="burger" type="button" onclick="toggleMenu()">
      <i className="fa-solid fa-bars"></i>
      <i className="fa-solid fa-close"></i>
    </button>

    <aside>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item py-3">
          <a
            href="/paciente"
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
            href="/paciente/turnos/dia"
            className="nav-link text-white"
            aria-current="page"
          >
            <i className="fa fa-wheelchair mx-1" aria-hidden="true"></i>
            Turnos del Día
          </a>
        </li>
        <li className="nav-item py-1">
          <a
            href="/paciente/turnos/completo"
            className="nav-link text-white"
            aria-current="page"
          >
            <i className="fa fa-wheelchair-alt mx-1" aria-hidden="true"></i>
            Todos los turnos
          </a>
        </li>
        <li className="nav-item py-1">
          <a
            href="/paciente/historial"
            className="nav-link text-white"
            aria-current="page"
          >
            <i className="fa fa-user-md mx-1" aria-hidden="true"></i>
            Devoluciones
          </a>
        </li>
        <li className="nav-item text-center">
          <a href="/" className="text-white btn btn-primary"> Cerrar Sesion </a>
        </li>
      </ul>
    </aside>

    <main className="container-fluid m-0 p-0">
      <div className="d-flex">
        <nav
          className="responsive"
          style=
            {{background: linear-'gradient( 100deg, rgba(4, 0, 61, 0.945), 70%, rgba(0, 0, 138, 0.9)'}}>
          <div
            className="d-flex flex-column flex-shrink-0 px-3"
            style={{width: '240px; height: 100vh; display: none'}}
          >
            <a
              href="/paciente"
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
                  href="/paciente/turnos/dia"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  <i className="fa fa-wheelchair mx-1" aria-hidden="true"></i>
                  Turnos del Día
                </a>
              </li>
              <li className="nav-item py-1">
                <a
                  href="/paciente/turnos/completo"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  <i className="fa fa-wheelchair-alt mx-1" aria-hidden="true"></i>
                  Todos los turnos
                </a>
              </li>
              <li className="nav-item py-1">
                <a
                  href="/paciente/historial"
                  className="nav-link text-white"
                  aria-current="page"
                >
                  <i className="fa fa-user-md mx-1" aria-hidden="true"></i>
                  Devoluciones
                </a>
              </li>
              <li className="nav-item text-center">
                <a href="/" className="text-white btn btn-primary">
                  Cerrar Sesion
                </a>
              </li>
            </ul>
          </div>
        </nav>
        </div>
    </main>
</body>
    );
};

export default Header_paciente