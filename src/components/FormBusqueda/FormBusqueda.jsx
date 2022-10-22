import "./formBusqueda.css";

const FormBusqueda = () => {
  return (
    <div>
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Buscar productos"
        />
        <button className="form-button" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default FormBusqueda;
