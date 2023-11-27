export const FilterPaciente = () => {
  return (
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
          required=""
        />
        <button type="submit" className="btn btn-primary">
          Filtrar
        </button>
      </div>
    </form>
  );
};
