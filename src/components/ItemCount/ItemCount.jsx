import { useState, useContext } from "react";
import "./ItemCount.css";
import { LightModeContext } from "../../context/lightMode";
import { toast } from "react-toastify";

const ItemCount = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1);

  const increaseQty = () => contador < stock && setContador(contador + 1);
  const decreaseQty = () => contador > 1 && setContador(contador - 1);

  const agregarAlCarrito = () => {
    onAdd(contador)
    toast.success(`Se ha agregado el producto al carrito`);
  };

  const { lightMode } = useContext(LightModeContext);

  return (
    <>
      <div className="count-container">
        <button onClick={decreaseQty} className={lightMode ? "cardBtn-light" : "cardBtn"}>
          -
        </button>
        {contador}
        <button onClick={increaseQty} className={lightMode ? "cardBtn-light" : "cardBtn"}>
          +
        </button>
      </div>
      <button className={lightMode ? "cardBtn-light" : "cardBtn"} onClick={agregarAlCarrito}>
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
