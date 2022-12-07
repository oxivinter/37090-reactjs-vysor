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
          <div className="cartItemCardGallery">
            {cart.map((prod, indice) => (
              <div className={lightMode ? "cartItemCardContainer-light" : "cartItemCardContainer"} key={indice}>
                <img src={prod.img} className="cartItemCardImg" alt="..." />
                <div className={lightMode ? "cartItemCardBody-light" : "cartItemCardBody"}>
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
          <div className={lightMode ? "endCartContainer-light" : "endCartContainer"}>
            <div className={lightMode ? "endCartBody-light f21a" : "endCartBody f21a"}>
              <h2>En resumen...</h2>
              <p>
                <strong>Total:</strong> ${totalPrice()}
              </p>
            </div>
            <div className={lightMode ? "endCartBody-light" : "endCartBody"}>
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
