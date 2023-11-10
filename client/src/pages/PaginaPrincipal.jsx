export const PaginaPrincipal = () => {
  return (
    <main>
      <section className="container-fluid fondo">
        <div className="fondo2">
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-3">
              <section className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3 text-light">
                  Centro de Atención San Antonio
                </h1>
                <p className="lead text-light">
                  Te damos la bienvenida a nuestra aplicación web. Estamos
                  mejorando constantemente la eficacia para su usabilidad.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <a href="/login">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg px-4 me-md-2"
                    >
                      Iniciar Sesión
                    </button>
                  </a>
                  <a href="/register">
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-lg px-4 text-light"
                    >
                      Registrarse
                    </button>
                  </a>
                </div>
              </section>
              <section className="col-10 col-sm-8 col-lg-6 rounded mt-3">
                <img
                  src="/img/inicio_sesion/img1.png"
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="400"
                  height="200"
                  loading="lazy"
                />
              </section>
            </div>
            <svg
              className="mb-2"
              style={{ color: "#fff" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
            <p className="" style={{ color: "#fff" }}>
              Tel: 0810-222-333
            </p>
          </div>
        </div>
      </section>

      <article className="container px-4 py-5 border-bottom">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img src="/img/inicio_sesion/TURNOS.png" alt="" width="50px" />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">
                Solicitación de Turnos
              </h3>
              <p>
                En la aplicación web tendrá la posibilidad de solicitar un turno
                de manera más sencilla
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img
                src="/img/inicio_sesion/historial-turnos.png"
                alt="sdsad"
                width="60px"
              />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Historial de Turnos</h3>
              <p>
                Le brindará la posibilidad de poder acceder hacia su historial
                de turnos junto a las devoluciones hechas por los doctores
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <img
                src="/img/inicio_sesion/turnos-programados.png"
                alt=""
                width="70px"
              />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">Turnos programados</h3>
              <p>
                Al estar registrado y haber sacado un turno, le llegará una
                notificación a su correo electrónico sobre el turno programado
                al llegar la fecha de la atención
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
