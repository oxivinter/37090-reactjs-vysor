import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  return (
    <div className="cardContainer">
      <img src={`/img/${producto.img}`} className="cardImg" alt="..." />
      <div className="cardBody">
        <p>
          <strong>{producto.nombre}</strong>
        </p>
        <p>
          <strong>Marca:</strong> {producto.marca}.
        </p>
        <p>
          <strong>Modelo:</strong> {producto.modelo}.
        </p>
        <p>
          <strong>Precio:</strong> ${producto.precio}.
        </p>
        <p>
          <strong>Stock:</strong> {producto.stock} unidades.
        </p>
        <button className="cardBtn">
        <Link to={`/`}>Agregar al carrito</Link> 
        {/* Funcionalidad de agregar al carrito aun no implementada, se agrega Link para mantener estilos */}
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;
