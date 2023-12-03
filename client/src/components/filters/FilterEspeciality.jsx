export const FilterEspeciality = () => {
  return (
    <form action="#" method="POST">
      <div className="d-flex m-1">
        <input
          type="text"
          id="valor"
          name="valor"
          className="form-control"
          required
        />
        <button type="submit" className="btn btn-primary">
          Filtrar
        </button>
      </div>
    </form>
  );
};
