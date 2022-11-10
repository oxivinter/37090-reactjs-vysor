import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    consultarBDD("../json/productos.json").then(productos => {
        const prod = productos.find(productoArray => productoArray.id === parseInt(id));
        setProducto(prod);
      })
    }, []);
  consultarBDD();

  return (
    <div>
      <div className="detalleProducto">
        <ItemDetail producto={producto}/>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
