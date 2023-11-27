export const HeaderPrincipal = () => {
  return (
    <header className="container-fluid">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary rounded"
        aria-label="Thirteenth navbar example"
      >
        <div className="container-fluid text-center">
          <a className="navbar-brand col-lg-4 me-0 h1 text-center" href="/">
            <img
              src="/img/inicio_sesion/logo.png"
              alt="logo centro de atencion"
              width="40px"
            />
            San Antonio
          </a>

          <div
            className="navbar-collapse d-lg-flex collapse"
            id="navbarsExample11"
          >
            <ul className="navbar-nav col-lg-6 justify-content-lg-center">
              <li className="nav-item justify-content-center"></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
