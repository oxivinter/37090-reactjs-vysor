import React from 'react';

const ItemDetail = ({producto}) => {
  return (
    <>
      <h1>DetalleProducto CARD</h1>
      <img src={`..img/${producto.img}`} className="img-fluid rounded" alt="" />
      <h5>{producto.nombre}</h5>
      <p>Modelo: {producto.modelo}</p>
      <p>Marca: {producto.marca}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <button>Agregar al carrito</button>
    </>
  );
}

export default ItemDetail;
