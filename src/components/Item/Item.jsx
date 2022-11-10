import { Link } from "react-router-dom";

const Item = ({prod}) => {
  return (
    <div className="cardContainer">
      <img src={`/img/${prod.img}`} className="cardImg" alt="..." />
      <div className="cardBody">
        <p><strong>{prod.nombre}</strong></p>
        <p><strong>Marca:</strong> {prod.marca}.</p>
        <p><strong>Modelo:</strong> {prod.modelo}.</p>
        <p><strong>Precio:</strong> ${prod.precio}.</p>
        <p><strong>Stock:</strong> {prod.stock} unidades.</p>
        <button className="cardBtn">
          <Link to={`/item/${prod.id}`}>Ver producto</Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
