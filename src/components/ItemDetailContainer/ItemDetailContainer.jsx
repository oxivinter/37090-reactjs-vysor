import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "../../assets/funciones";
import ItemDetail from "../ItemDetail/ItemDetail";
import { LightModeContext } from "../../context/lightMode";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  const { lightMode, toggleLightMode } = useContext(LightModeContext);

  useEffect(() => {
    consultarBDD("../json/productos.json").then((productos) => {
      console.log(productos);
      const prod = productos.find(
        (productoArray) => productoArray.id === parseInt(id)
      );
      setProducto(prod);
    });
  }, [id]);

  return (
    <div>
      <div className="router">
        <button
          className={lightMode ? "themeBtn-light" : "themeBtn"}
          onClick={() => toggleLightMode()}
        >
          Cambiar estilos
        </button>
        <ItemDetail producto={producto} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
