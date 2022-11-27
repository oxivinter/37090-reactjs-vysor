import { useState, createContext } from "react";

const CartContext = createContext([]);

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  console.log(cart);
  
  const isInCart = (id) => {
    return cart.find((prod) => prod.id === id);
  };
  
  const addItem = (producto, cantidad) => {
    if (isInCart(producto.id)) {
      const indice = cart.findIndex(prod => prod.id === producto.id);
      const aux = [...cart];  //review
      aux[indice].cant = cantidad;
      setCart(aux);
    } else {
      const nuevoProducto = {
        ...producto,
        cant: cantidad
      }
      setCart([...cart, nuevoProducto]);
    }
    console.log(cart);
  };

  const emptyCart = () => {
    return setCart([]);
  };
  const removeItem = (id) => {
    return setCart(cart.filter((prod) => prod.id !== id));
  };
  const getItemQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.cant), 0);
  };
  const totalPrice = () => {
    return cart.reduce((acc, prod) => (acc += prod.cant * prod.precio), 0);
  };

  return (
    <CartContext.Provider value = {{ cart, isInCart, addItem, emptyCart, removeItem, getItemQuantity, totalPrice }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
