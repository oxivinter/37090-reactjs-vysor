import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createOrdenCompra,
  getProducto,
  updateProducto,
} from "../../assets/firebase.js";

// CONTEXT
import { CartContext } from "../../context/cartContext";
import { LightModeContext } from "../../context/lightMode";
import "./Checkout.css";

const Checkout = () => {
  const { cart, emptyCart, totalPrice, getItemQuantity } =
    useContext(CartContext);
  const { lightMode, toggleLightMode } = useContext(LightModeContext);

  const datosFormulario = React.useRef();
  let navigate = useNavigate();

  const consultarFormulario = (e) => {
    e.preventDefault();
    const datForm = new FormData(datosFormulario.current);
    const valores = Object.fromEntries(datForm);
    const aux = [...cart];
    aux.forEach((producto) => {
      getProducto(producto.id).then((prod) => {
        prod.stock -= producto.cant;
        updateProducto(producto.id, prod);
      });
    });

    createOrdenCompra(
      valores,
      totalPrice(),
      new Date().toISOString().slice(0, 10)
    )
      .then((orden) => {
        toast.success(`Su orden ${orden.id} fue creada con éxito`);
        emptyCart();
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Su orden no fue creada con éxito`);
        console.error(error);
      });
  };

  return (
    <div className="router">
      <button
        className={lightMode ? "themeBtn-light" : "themeBtn"}
        onClick={() => toggleLightMode()}
      >
        Cambiar estilos
      </button>
      <div className="cardGallery">
        {cart.map((prod, indice) => (
          <div
            className={lightMode ? "cardContainer-light" : "cardContainer"}
            key={indice}
          >
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
            </div>
          </div>
        ))}
      </div>
      <div className="checkoutContainer">
        <form
          className="checkoutBody formStructure"
          onSubmit={consultarFormulario}
          ref={datosFormulario}
        >
          <h1 className="checkout-box">Checkout</h1>
          <div className="checkout-box">
            <label htmlFor="nombre" className="checkout-label">
              Nombre
            </label>
            <input type="text" className="checkout-control" name="nombre" />
          </div>
          <div className="checkout-box">
            <label htmlFor="apellido" className="checkout-label">
              Apellido
            </label>
            <input type="text" className="checkout-control" name="apellido" />
          </div>
          <div className="checkout-box">
            <label htmlFor="email" className="checkout-label">
              Email
            </label>
            <input type="email" className="checkout-control" name="email" />
          </div>
          <div className="checkout-box">
            <label htmlFor="dni" className="checkout-label">
              DNI
            </label>
            <input type="number" className="checkout-control" name="dni" />
          </div>
          <div className="checkout-box">
            <label htmlFor="celular" className="checkout-label">
              Numero telefonico
            </label>
            <input type="number" className="checkout-control" name="celular" />
          </div>
          <div className="checkout-box">
            <label htmlFor="direccion" className="checkout-label">
              Dirección
            </label>
            <input type="text" className="checkout-control" name="direccion" />
          </div>
          {getItemQuantity() > 0 ? (
            <button type="submit" className="cardBtn">
              Finalizar Compra
            </button>
          ) : (
            <div
              className={lightMode ? "cardContainer-light" : "cardContainer"}
            >
              <p>El carrito está vacio!</p>
              <Link to={"/"}>
                <button className={lightMode ? "cardBtn-light" : "cardBtn"}>
                  Volver al inicio
                </button>
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
