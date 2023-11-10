export const HeaderPrincipal = () => {
  return (
    <>
      <header className="container-fluid">
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary rounded"
          aria-label="Thirteenth navbar example"
        >
          <div className="container-fluid text-center">
            <a className="navbar-brand col-lg-4 me-0 h1 text-center" href="/">
              <img
                src="img/inicio_sesion/logo.png"
                alt="logo centro de atencion"
                width="40px"
              />
              San Antonio
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample11"
              aria-controls="navbarsExample11"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="navbar-collapse d-lg-flex collapse"
              id="navbarsExample11"
            >
              <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                <li className="nav-item justify-content-center">
                  <p className="">0810-222-333</p>
                  <p className="">Lunes a Domingos - 7:00hs a 19:00hs</p>
                </li>
              </ul>
              <div className="d-lg-flex col-lg-4 justify-content-lg-end">
                <button className="btn btn-primary m-1">Ayuda</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
