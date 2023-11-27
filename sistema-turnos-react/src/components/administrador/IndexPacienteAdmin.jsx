import React from "react"
import HeaderAdministrador from "../partials/admin/HeaderAdministrador";
import FooterAdmin from "../partials/admin/FooterAdmin";

const IndexPacienteAdmin = () => {
  return (
    <>
    <HeaderAdministrador/>
    <FooterAdmin/>
    <section className="w-100">
  <div
    className="p-5 fw-bold fs-5 text-white" style={{height: "1px", background: "rgb(0, 4, 41)"}}>
    {/* <%- user -%> */}
  </div>

  <div className="px-5">
    <h3
      className="fw-bold my-5"
      style={{fontFamily: "Georgia, 'Times New Roman', Times, serif"}}>
      Navegación de Pantallas
    </h3>
    <div className="row">
      <div className="col-sm-6 mb-6 mb-sm-0">
        <div className="card m-2 shadow rounded border">
          <img
            src="/img/admin/pacientes.png"
            alt=""
            width="80px"
            style={{position: "absolute", top: "-20px"}}
          />
          <a href="/lista_pacientes" className="btn">
            <div className="card-body">
              <p className="card-title text-center">
                Pantalla de Pacientes Activos
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
            style={{position: "absolute", top: "-20px; left: -50px"}}
          />
          <a href="/lista_doctores" className="btn">
            <div className="card-body">
              <p className="card-title text-center">Pantalla de Doctores Activos</p>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card m-2 shadow rounded border">
          <img
            src="/img/admin/especialidades.png"
            alt=""
            width="80px"
            style={{position: "absolute", top: "-5px; left: 6px"}}
          />
          <a href="/lista_especialidades" className="btn">
            <div className="card-body">
              <p className="card-title text-center">Pantalla de Especialidades</p>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card m-2 shadow rounded border">
          <img
            src="/img/admin/turnos.png"
            alt=""
            width="80px"
            style={{position: "absolute", top: "-10px; left: 6px"}}
          />
          <a href="/lista_turnos" className="btn">
            <div className="card-body">
              <p className="card-title text-center">Pantalla de Turnos</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<script src="/js/pantalla_principal.js"></script>
    </>
  )
}

export default IndexPacienteAdmin;
