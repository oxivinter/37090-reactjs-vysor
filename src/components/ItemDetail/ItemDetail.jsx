import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { CartContext } from "../../context/cartContext.js";
import { LightModeContext } from "../../context/lightMode.js";

const ItemDetail = ({ producto }) => {
  const { lightMode } = useContext(LightModeContext);
  const { addItem } = useContext(CartContext);

  const onAdd = (contador) => {
    console.log(producto);
    console.log(contador);
    console.log(addItem);
    addItem(producto, contador)
  };


  return (

    <div className={lightMode ? "cardContainer-light" : "cardContainer"}>
      <img src={`/img/${producto.img}`} className="cardImg" alt="..." />
      <div className={lightMode ? "cardBody-light" : "cardBody"}>
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
        <ItemCount stock={producto.stock} onAdd={onAdd} />
        <button className={lightMode ? "cardBtn-light" : "cardBtn"}><Link to="/cart">Ir al carrito</Link></button>
      </div>
    </div>
  );
};

export default ItemDetail;
