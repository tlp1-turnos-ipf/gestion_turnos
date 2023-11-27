import React from "react"

const ListaPaciente = () => {
  return(
    <>
    <section className="w-100" style={{backgroundColor: "rgb(240, 240, 240)"}}>
  <div className="p-5 fs-5 text-white" style={{height: "1px", background: "rgb(0, 4, 41)"}}>
    Listado de Pacientes
  </div>

  <div
    className="my-3 shadow p-3 m-5 bg-body rounded border d-flex flex-wrap justify-content-between">
    <a href="/crear_paciente" className="btn btn-primary text-light m-1">Agregar Paciente</a>

    <form action="#" method="POST">
      <div className="d-flex m-1">
        <select name="filtro" id="filtro" className="btn btn-secondary">
          <option value="dni">DNI</option>
          <option value="telefono">Telefono</option>
        </select>
        <input
          type="text"
          id="valor"
          name="valor"
          className="form-control"
          required
          />
        <button type="submit" className="btn btn-primary">Filtrar</button>
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
      <tbody
        className="d-flex-reverse align-items-center justify-content-center"
        id="listaPacientes">
        </tbody>
    </table>
  </div>
</section>
<script src="js/pantalla_principal.js"></script>
<script src="js/administrador/paciente/lista_pacientes.js"></script>
<script src="js/alerta.js"></script>
    </>
  )
}

// <%- include("../../partials/admin/header_administrador.ejs") -%>

// <%- include("../../partials/admin/footer_admin.ejs") -%>

export default ListaPaciente;
