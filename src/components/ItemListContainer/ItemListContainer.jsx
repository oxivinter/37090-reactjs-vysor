import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "../../assets/funciones";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const {category} = useParams()

  useEffect(() => {
    if(category) {
      consultarBDD("../json/productos.json").then(products => {
        const productsList = products.filter(prod => prod.idCategoria === parseInt(category));
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    } else {
      consultarBDD("./json/productos.json").then(productsList => {
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    }
    
  }, [category]);

  return <div className="router">{productos}</div>;
};

export default ItemListContainer;
