import React from "react"

const ListaPacienteCompletos = () => {
  return (
    <>
    <section className="w-100" style={{backgroundColor: "rgb(240, 240, 240)"}}>
  <div
    className="p-5 text-white"
    style={{height: "1px", background: "rgb(0, 4, 41)"}}>
    Listado de Pacientes Completos
  </div>

  <div
    className="my-3 shadow p-3 m-5 bg-body rounded border d-flex justify-content-between">
    <a href="/crear_paciente" className="btn btn-primary text-light">Agregar Paciente</a>
    <form id="buscador">
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          id="dniInput"
          placeholder="DNI"/>
        <button className="btn btn-secondary">Buscar</button>
      </div>
    </form>
  </div>

  <div className="main-table shadow m-5 bg-body rounded border">
    <table className="table table-striped rounded text-center">
      <thead className="table-dark">
        <tr>
          <th scope="col">DNI</th>
          <th scope="col">Nombre y Apellido</th>
          <th scope="col" colspan="2">Funciones</th>
        </tr>
      </thead>
      <tbody className="d-flex-reverse align-items-center justify-content-center" id="listaPacientes">
      </tbody>
    </table>
  </div>
</section>
<script src="js/pantalla_principal.js"></script>
<script src="js/administrador/paciente/lista_pacientes_completos.js"></script>
    </>
  );

};

{/* <%- include("../../partials/admin/header_administrador.ejs") -%>

<%- include("../../partials/admin/footer_admin.ejs") -%> */}

export default ListaPacienteCompletos;