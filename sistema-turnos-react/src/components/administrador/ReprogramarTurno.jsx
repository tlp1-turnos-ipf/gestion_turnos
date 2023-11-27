import React from "react"

const ReprogramarTurno = () => {
  return (
    <>
    <div style={{backgroundColor: "rgb(240, 240, 240)"}}>
    <section class="w-100">
      <div
        class="p-5 text-white font-bold d-flex justify-content-between"
        style={{height: "1px", background: "rgb(0, 4, 41)"}}
      >
        <a
          href="/lista_turnos"
          class="d-flex align-items-center text-white text-decoration-none py-2"
        >
          <img src="/img/inicio_sesion/logo.png" alt="logo.png" width="70px" />
          <span class="fs-4">Reprogramar Turno</span>
        </a>
        <p>User: {/*<%= user %>*/}</p>
      </div>

      <div class="justify-content-around">
        <div class="w-100 my-4 d-flex justify-content-center">
          <div>
            <h3 class="text-center">Elija el nuevo horario</h3>
            <input
              type="text"
              placeholder="Ingrese una palabra clave para buscar el horario"
              class="shadow bg-body rounded border w-100 p-2 my-2"
            />
            <div class="shadow rounded border w-100 text-center">
              <form action="" id="select">
                <select
                  name="horario"
                  id="ListaHorario"
                  class="p-2 form-select form-select-lg mb-2"
                ></select>
                <button type="submit" class="btn btn-sm btn-primary">
                  Reprogramar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div
          id="DatosTurno"
          class="mx-5 d-flex justify-content-center"
          data-id="<%= id %>"
        ></div>
      </div>
    </section>
    <script src="/js/pantalla_principal.js"></script>
    <script src="/js/administrador/turnos/reprogramar.js"></script>
  </div>
    </>
  )
} 
// <%- include("../partials/admin/footer_admin.ejs") -%>

export default ReprogramarTurno;

