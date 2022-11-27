import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "../../assets/funciones";
import ItemList from "../ItemList/ItemList";
import { LightModeContext } from "../../context/lightMode";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  const { lightMode, toggleLightMode } = useContext(LightModeContext);

  useEffect(() => {
    if (category) {
      consultarBDD("../json/productos.json").then((products) => {
        const productsList = products.filter(
          (prod) => prod.idCategoria === parseInt(category)
        );
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    } else {
      consultarBDD("./json/productos.json").then((productsList) => {
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    }
  }, [category]);

  return (
    <div className="router">
      <button className={lightMode ? "themeBtn-light" : "themeBtn"} onClick={() => toggleLightMode()}>
        Cambiar estilos
      </button>
      {productos}
    </div>
  );
};

export default ItemListContainer;
