import React from "react";
import './Checkout.css'

const Checkout = () => {
  const datosFormulario = React.useRef();
  const consultarFormulario = (e) => {
      e.preventDefault()
      console.log(datosFormulario)
      const datForm = new FormData(datosFormulario.current)
      const valores = Object.fromEntries(datForm)
      console.log(valores)
      e.target.reset()
  }

  return (
    <div className="cardContainer">
      <form className="cardBody formStructure" onSubmit={consultarFormulario} ref={datosFormulario}>
      <h1 className="mb-3">Checkout</h1>
        <div className="mb-3">
          <label htmlFor="nombre" className="checkout-label">
            Nombre y Apellido
          </label>
          <input type="text" className="checkout-control" name="nombre" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="checkout-label">
            Email
          </label>
          <input type="email" className="checkout-control" name="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="dni" className="checkout-label">
            DNI
          </label>
          <input type="number" className="checkout-control" name="dni" />
        </div>
        <div className="mb-3">
          <label htmlFor="celular" className="checkout-label">
            Numero telefonico
          </label>
          <input type="number" className="checkout-control" name="celular" />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="checkout-label">
            Dirección
          </label>
          <input type="text" className="checkout-control" name="direccion" />
        </div>
        <button type="submit" className="cardBtn">
          Finalizar Compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
