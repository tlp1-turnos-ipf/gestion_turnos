import React from "react"


const CrearPaciente = () =>{
  return(

    <>
    <section className="w-100" style={{backgroundColor: "rgb(240, 240, 240)"}}>
  <div className="p-5" style={{height: "1px", background: "rgb(0, 4, 41)"}}></div>

  <div className="container px-4 py-1">
    <form className="p-1 p-md-4" id="formNuevoPaciente">
      <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
        <p className="fs-5">
          <img src="/img/inicio_sesion/logo.png" alt="" width="30px" />Agregar
          Paciente
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="form-floating m-2 inputForm">
          <input
            type="text"
            className="form-control border-secondary"
            id="nombres"
            placeholder="juan"
            name="nombre"
            required
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
            required
          />
          <label for="apellido">Apellidos</label>
        </div>
        <div className="form-floating m-2 inputForm">
          <input
            type="date"
            className="form-control border-secondary"
            id="fecha_nac"
            name="fecha_nac"
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
            required
          />
          <label for="telefono">Telefóno</label>
        </div>
        <div className="form-floating m-2 inputForm">
          <select
            name="sexo"
            id="sexo"
            className="form-select border-secondary"
            aria-label="Sexos"
            required
          >
            <option value="#">Elegir el Sexo</option>
            <option value="1">Masculino</option>
            <option value="2">Femenino</option>
            <option value="3">Otros</option>
          </select>
        </div>

        <div className="form-floating m-2 inputForm">
          <select
            name="discapacidad"
            id="discapacidad"
            className="form-select border-secondary"
            aria-label="discapacidad"
            required
          >
            <option value="#">¿Posee discapacidad?</option>
            <option value="1">Si</option>
            <option value="2">No</option>
          </select>
        </div>
      </div>

      <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
        <p className="fs-5">Cuenta</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="form-floating m-2 inputForm">
          <input
            type="text"
            className="form-control border-secondary"
            id="nombre_usuario"
            placeholder="3704332211"
            name="nombre_usuario"
            required
          />
          <label for="nombre_usuario">Nombre de Usuario</label>
        </div>
        <div className="form-floating m-2 inputForm">
          <input
            type="email"
            className="form-control border-secondary"
            id="email"
            placeholder="example@gmail.com"
            name="email"
            required
          />
          <label for="email">Email</label>
        </div>
        <div className="form-floating m-2 inputForm">
          <input
            type="password"
            className="form-control border-secondary"
            id="password"
            placeholder="3704332211"
            name="password"
            required
          />
          <label for="password">Contraseña</label>
        </div>

        <div className="form-floating m-2 inputForm mb-5">
          <input
            type="password"
            className="form-control border-secondary"
            id="confirmPassword"
            placeholder="3704332211"
            name="confirmPassword"
            required
          />
          <label for="confirmPassword">Confirmar Contraseña</label>
        </div>

        <hr className="my-4" />
      </div>
      <div className="d-flex justify-content-center">
        <a href="/lista_pacientes" className="btn btn-lg btn-secondary mx-2"
          >Volver</a
        >

        <button className="btn btn-lg btn-primary mx-2" type="submit">
          Confirmar
        </button>
      </div>
    </form>
  </div>
</section>

<script src="/js/pantalla_principal.js"></script>
<script src="/js/administrador/paciente/crear_paciente.js"></script>
    </>

  );
};

export default CrearPaciente;

{/* <%- include("../../partials/admin/header_administrador.ejs") -%>


<%- include("../../partials/admin/footer_admin.ejs") -%> */}
