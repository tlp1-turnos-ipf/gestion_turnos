import React from "react"

const ListaTurnos = () => {
  return (
    <>
    <section class="w-100" style={{backgroundColor: "rgb(240, 240, 240)"}}>
  <div class="p-5" style={{height: "1px", background: "rgb(0, 4, 41)"}}></div>

  <div
    class="my-3 shadow p-3 m-5 bg-body rounded border d-flex justify-content-between"
  >
    <a href="/lista_doctores" class="btn btn-primary text-light"
      >Agregar Turno</a
    >
    <form action="#" method="POST">
      <div class="d-flex">
        <select name="filtro" id="filtro" class="btn btn-secondary">
          <option value="dni">DNI</option>
          <option value="telefono">Telefono</option>
        </select>
        <input
          type="text"
          id="valor"
          name="valor"
          class="form-control"
          required
        />
        <button type="submit" class="btn btn-primary">Filtrar</button>
      </div>
    </form>
  </div>

  <div class="main-table shadow m-5 bg-body rounded border">
    <table class="table table-striped rounded text-center">
      <thead class="table-dark">
        <tr>
          <th scope="col">Paciente</th>
          <th scope="col">Doctor</th>
          <th scope="col">Especialidad</th>
          <th scope="col">Fecha</th>
          <th scope="col" colspan="2">Funciones</th>
        </tr>
      </thead>
      <tbody
        class="d-flex-reverse align-items-center justify-content-center"
        id="listaTurnos"
      ></tbody>
    </table>
  </div>
</section>
<script src="js/pantalla_principal.js"></script>
<script src="js/administrador/lista_turnos.js"></script>
    </>
  );
};

export default ListaTurnos; 

{/* <%- include("../partials/admin/header_administrador.ejs") -%>

<%- include("../partials/admin/footer_admin.ejs") -%> */}
