import React from "react"

const EditarPaciente = () => {
  return(
    <>
    <section className="w-100" style={{backgroundColor: "rgb(240, 240, 240)"}}>
  <div className="p-5" style={{height: "1px", background: "rgb(0, 4, 41)"}}></div>

  <div className="container px-4 py-5">
    <form className="p-1 p-md-4" id="formEditarPaciente" data-id="<%= id %>">
      <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
        <p className="fs-5">
          <img src="/img/inicio_sesion/logo.png" alt="" width="30px" />Modificar
          Paciente
        </p>
      </div>

      <div className="d-flex flex-wrap mb-5 justify-content-center w-100">
        <div className="form-floating m-2 inputForm">
          <input
            type="text"
            className="form-control border-secondary"
            id="nombres"
            placeholder="juan"
            name="nombre"
            value=""
          />
          <label for="nombre">Nombres</label>
        </div>
        <div className="form-floating m-2 inputForm">
          <input
            type="text"
            className="form-control border-secondary"
            id="apellidos"
            placeholder="Perez"
            name="apellido"
            value=""
            required
          />
          <label for="apellido">Apellidos</label>
        </div>
        <div className="form-floating m-2 inputForm">
          <input
            type="date"
            className="form-control border-secondary"
            id="fecha_nac"
            placeholder="00/00/0000"
            name="fecha_nac"
            value=""
            required
          />
          <label for="fecha">Fecha de Nacimiento</label>
        </div>
        <div className="form-floating m-2 inputForm">
          <input
            type="number"
            className="form-control border-secondary"
            id="dni"
            placeholder=""
            name="dni"
            value=""
            required
          />
          <label for="dni">DNI</label>
        </div>
        <div className="form-floating m-2 inputForm">
          <input
            type="text"
            className="form-control border-secondary"
            id="direccion"
            placeholder="mz 71 cs 30"
            name="direccion"
            value=""
            required
          />
          <label for="direccion">Dirección</label>
        </div>
        <div className="form-floating m-2 inputForm">
          <input
            type="number"
            className="form-control border-secondary"
            id="telefono"
            placeholder="3704332211"
            name="telefono"
            value=""
            required
          />
          <label for="telefono">Teléfono</label>
        </div>

        <hr className="my-4" />
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <a href="/lista_pacientes" className="btn btn-secondary btn-lg mx-2"
          >Volver</a
        >
        <button className="btn btn-lg btn-primary mx-2" type="submit">
          Editar
        </button>
      </div>
    </form>
  </div>
</section>

<script src="/js/pantalla_principal.js"></script>
<script src="/js/administrador/paciente/editar_paciente.js"></script>
    </>
  );

};

{/* <%- include("../../partials/admin/header_administrador.ejs") -%>


<%- include("../../partials/admin/footer_admin.ejs") -%> */}


export default EditarPaciente;