import React from "react"

const ver_devolucion = () => {
    return (

      <>
      <section className="w-100" style={{backgroundColor: "rgb(240, 240, 240)"}}>
    <div className="p-5 fs-5 text-white fw-bold" style={{height: "1px", background: "rgb(0, 4, 41)"}}>
      Devoluciones
    </div>

    <div className="my-3 shadow p-3 m-5 bg-body rounded border d-flex justify-content-between">
      <a href="/paciente/historial" className="btn btn-success text-light">Volver</a>
      <button id="imprimirBtn" className="btn btn-sm btn-primary m-1">
        Imprimir
      </button>
    </div>

    <div className="m-5 d-flex flex-wrap justify-content-center main-table" id="listaDevolucion" data-id="<%= idTurno %>">
    </div>
  </section>

  <script src="/js/pantalla_principal.js"></script>
  <script src="/js/pacientes/ver_devolucion.js"></script>
  <script src="/js/script.js"></script>
      </>

  );
};

export default ver_devolucion;

//  <%- include("../partials/header_paciente.ejs") -%>

  

//  <%- include("../partials/admin/footer_admin.ejs") -%>