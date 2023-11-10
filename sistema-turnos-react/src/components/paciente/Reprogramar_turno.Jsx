import React from "react"

const Reprogramar_turno = () => {
  return (
    <>
    <body style={{backgroundColor: 'rgb(240, 240, 240)'}}>
    <section className="w-100">
      <div
        className="p-5 text-white font-bold d-flex justify-content-between"
        style={{height: '1px', background: 'rgb(0, 4, 41)'}}
      >
        <a
          href="/lista_turnos"
          className="d-flex align-items-center text-white text-decoration-none py-2"
        >
          <img src="/img/inicio_sesion/logo.png" alt="logo.png" width="70px" />
          <span className="fs-4">Reprogramar Turno</span>
        </a>
        <p>User: 
          {/* <%= user %> */}
          </p>
      </div>

      <div className="justify-content-around">
        <div className="w-100 my-4 d-flex justify-content-center">
          <div>
            <h3 className="text-center">Elija el nuevo horario</h3>
            <input
              type="text"
              placeholder="Ingrese una palabra clave para buscar el horario"
              className="shadow bg-body rounded border w-100 p-2 my-2"
            />
            <div className="shadow rounded border w-100 text-center">
              <form action="" id="select">
                <select
                  name="horario"
                  id="ListaHorario"
                  className="p-2 form-select form-select-lg mb-2"
                ></select>
                <button type="submit" className="btn btn-sm btn-primary">
                  Reprogramar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          id="DatosTurno"
          className="mx-5 d-flex justify-content-center"
          data-id="<%= id %>"
        ></div>
      </div>
    </section>
    <script src="/js/pantalla_principal.js"></script>
    <script src="/js/administrador/turnos/reprogramar.js"></script>

    {/* <%- include("../partials/admin/footer_admin.ejs") -%> */}
  </body>
    </>
  );
};

export default Reprogramar_turno

