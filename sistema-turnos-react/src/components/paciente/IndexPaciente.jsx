import React from "react";

const IndexPaciente = () => {
  return (
    <>
      <section className="w-100">
        <div className="p-5 fw-bold fs-5 text-white" style={{ height: "1px", background: "rgb(0, 4, 41)" }}>{/*<%= user %>*/}</div>

        <div className="px-5">
          <div className="d-flex flex-wrap justify-content-between">
            <h3 className="fw-bold my-5" style={{ fontFamily: "Georgia, Times New Roman, Times, serif" }}>Navegación de Pantallas</h3>
          </div>

          <div className="row">
            <div className="col-sm-6 mb-6 mb-sm-0">
              <div className="card m-2 shadow rounded border">
                <img
                  src="/img/admin/pacientes.png"
                  alt=""
                  width="80px"
                  style={{ position: "absolute", top: "-20px" }}
                />
                <a href="/paciente/turnos/dia" className="btn">
                  <div className="card-body">
                    <p className="card-title text-center">
                      Listado de Turnos del día
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card m-2 shadow rounded border">
                <img
                  src="/img/admin/doctores.png"
                  alt=""
                  width="160px"
                  style={{ position: "absolute", top: "-20px", left: "-50px" }}
                />
                <a href="/paciente/turnos/completo" className="btn">
                  <div className="card-body">
                    <p className="card-title text-center">
                      Listado de Turnos Completo
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card m-2 shadow rounded border">
                <img
                  src="/img/admin/doctores.png"
                  alt=""
                  width="160px"
                  style={{ position: "absolute", top: "-20px", left: "-50px" }}
                />
                <a href="/paciente/historial" className="btn">
                  <div className="card-body">
                    <p className="card-title text-center">
                      Historial de Devoluciones
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="/js/pantalla_principal.js"></script>
    </>
  );
};

export default IndexPaciente;


// <%- include("../partials/header_paciente.ejs") -%>

// <%- include("../partials/admin/footer_admin.ejs") -%>
