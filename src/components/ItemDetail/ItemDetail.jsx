import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { CartContext } from "../../context/cartContext.js";
import { LightModeContext } from "../../context/lightMode.js";

const ItemDetail = ({ producto }) => {
  const { lightMode } = useContext(LightModeContext);
  const { addItem } = useContext(CartContext);

  const onAdd = (contador) => {
    addItem(producto, contador);
  };

  return (
    <div
      className={lightMode ? "detailCardContainer-light" : "detailCardContainer"}
    >
      <img src={producto.img} className="detailCardImg" alt="..." />
      <div className="detailCardDivider">
        <div className={lightMode ? "detailCardBody-light" : "detailCardBody"}>
          <p>
            <strong>{producto.nombre}</strong>
          </p>
          <br />
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
        </div>
        <div className="detailCardBody">
          <ItemCount stock={producto.stock} onAdd={onAdd} />
          <button className={lightMode ? "cardBtn-light" : "cardBtn"}>
            <Link to="/cart">Ir al carrito</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
