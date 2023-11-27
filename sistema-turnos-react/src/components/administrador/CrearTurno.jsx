import React, { useEffect, useState } from "react";
import $ from "jquery";
import "select2";
import HeaderAdministrador from "../partials/admin/HeaderAdministrador";
import FooterAdmin from "../partials/admin/FooterAdmin";

const CrearTurno = () => {
  const [selectedPaciente, setSelectedPaciente] = useState("1");

  useEffect(() => {
    // Cargar scripts después de que el componente se monte
    $.getScript("https://code.jquery.com/jquery-3.6.0.min.js", () => {
      // Lógica adicional después de cargar jQuery
    });

    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js", () => {
      // Lógica adicional después de cargar Select2
    });

    // Lógica adicional después de cargar otros scripts si es necesario
  }, []); // El segundo argumento es un array vacío para ejecutarse solo una vez al montar el componente

  const handlePacienteChange = (event) => {
    setSelectedPaciente(event.target.value);
  };

  return (
    <>
      <HeaderAdministrador />
      <section className="w-100" style={{ backgroundColor: "rgb(240, 240, 240)" }}>
        <div className="p-5" style={{ height: "1px", background: "rgb(0, 4, 41)" }}></div>

        <div className="container px-4 py-1">
          <form className="p-1 p-md-4" id="formNuevoTurno" data-id="<%= id %>">
            <div className="m-2 fw-bold d-flex justify-content-center border-bottom">
              <p className="fs-5">
                <img src="/img/inicio_sesion/logo.png" alt="" width="30px" />Agregar Turno{" "}
              </p>
            </div>

            <div className="d-flex flex-column align-items-center">
              <select
                className="w-50 border"
                name="formBuscadorPaciente"
                id="paciente_id"
                value={selectedPaciente}
                onChange={handlePacienteChange}
              >
                <option value="1">Selecciona al paciente</option>
                {/* Otras opciones */}
              </select>
              <hr className="my-4" />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-lg btn-primary mx-2" type="submit">
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </section>
      <FooterAdmin/>

      <script src="/assets/js/pantalla_principal.js"></script>
      <script src="/assets/js/administrador/crear_turno.js"></script>
    </>
  );
};

export default CrearTurno;


