import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { LightModeContext } from "../../context/lightMode";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, emptyCart, removeItem, totalPrice } = useContext(CartContext);
  const { lightMode, toggleLightMode } = useContext(LightModeContext);
  return (
    <div className="router">
    <button
      className={lightMode ? "themeBtn-light" : "themeBtn"}
      onClick={() => toggleLightMode()}
    >
      Cambiar estilos
    </button>
      {cart.length === 0 ? (
        <div className={lightMode ? "cardContainer-light" : "cardContainer"}>
          <p>El carrito está vacio!</p>
          <Link to={"/"}>
            <button className={lightMode ? "cardBtn-light" : "cardBtn"}>
              Volver al inicio
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cardGallery">
            {cart.map((prod, indice) => (
              <div className={lightMode ? "cardContainer-light" : "cardContainer"} key={indice}>
                <img src={prod.img} className="cardImg" alt="..." />
                <div className={lightMode ? "cardBody-light" : "cardBody"}>
                  <p>
                    {prod.nombre} {prod.marca} {prod.modelo}
                  </p>
                  <p>
                    <strong>Cantidad:</strong> {prod.cant}
                  </p>
                  <p>
                    <strong>Precio:</strong> ${prod.precio}
                  </p>
                  <br />
                  <p>
                    <strong>Subtotal:</strong> ${prod.precio * prod.cant}
                  </p>
                  <button
                    className={lightMode ? "cardBtn-light" : "cardBtn"}
                    onClick={() => removeItem(prod.id)}
                  >
                    Eliminar Producto
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={lightMode ? "itemCartContainer-light" : "itemCartContainer"}>
            <div className={lightMode ? "itemCartBody-light f21a" : "itemCartBody f21a"}>
              <h2>En resumen...</h2>
              <p>
                <strong>Total:</strong> ${totalPrice()}
              </p>
            </div>
            <div className={lightMode ? "itemCartBody-light" : "itemCartBody"}>
              <button className={lightMode ? "cardBtn-light" : "cardBtn"} onClick={emptyCart}>
                Limpiar Carrito
              </button>
              <Link to="/checkout">
                <button className={lightMode ? "cardBtn-light" : "cardBtn"}>Finalizar Compra</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
