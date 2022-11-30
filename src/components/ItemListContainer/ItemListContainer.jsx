import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductos } from "../../assets/firebase.js";
import ItemList from "../ItemList/ItemList";
import { LightModeContext } from "../../context/lightMode";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  const { lightMode, toggleLightMode } = useContext(LightModeContext);

  useEffect(() => {
    if (category) {
      getProductos().then((products) => {
        const productsList = products.filter(
          (prod) => prod.idCategoria === parseInt(category)
        );
        const cardProductos = ItemList({ productsList });
        setProductos(cardProductos);
      });
    } else {
      getProductos().then((productsList) => {
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
