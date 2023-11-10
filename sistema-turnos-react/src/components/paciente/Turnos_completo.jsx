import React from "react"

const Turnos_completo = () => {
  return(
    <>
    <section class="w-100" style={{backgroundColor: 'rgb(240, 240, 240)'}}>
  <div
    class="p-5 fs-5 text-white fw-bold"
    style="height: 1px; background: rgb(0, 4, 41)"
  >
    Turnos Vigentes
  </div>

  <div
    class="my-3 shadow p-3 m-5 bg-body rounded border d-flex justify-content-between"
  >
    <a href="/paciente" class="btn btn-success text-light">Volver</a>
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
          <th scope="col">Doctor</th>
          <th scope="col">Especialidad</th>
          <th scope="col">Turno</th>
          <th scope="col">Horario</th>
          <th scope="col">Fecha Turno</th>
        </tr>
      </thead>
      <tbody
        class="d-flex-reverse align-items-center justify-content-center"
        id="listaTurnos"
        data-id="<%= idUser %>"
      ></tbody>
    </table>
  </div>
</section>

<script src="/js/pantalla_principal.js"></script>
<script src="/js/pacientes/turnos_completo.js"></script>

    </>
  );
};

export default Turnos_completo

// <%- include("../partials/header_paciente.ejs") -%>


// <%- include("../partials/admin/footer_admin.ejs") -%>
