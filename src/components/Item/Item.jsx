import { useContext } from "react";
import { Link } from "react-router-dom";
import { LightModeContext } from "../../context/lightMode";

const Item = ({prod}) => {
const {lightMode} = useContext(LightModeContext)
  
  return (
    <div className={lightMode ? "cardContainer-light" : "cardContainer"}>
      <img src={`/img/${prod.img}`} className="cardImg" alt="..." />
      <div className={lightMode ? "cardBody-light" : "cardBody"}>
        <p><strong>{prod.nombre}</strong></p>
        <p><strong>Marca:</strong> {prod.marca}.</p>
        <p><strong>Modelo:</strong> {prod.modelo}.</p>
        <p><strong>Precio:</strong> ${prod.precio}.</p>
        <p><strong>Stock:</strong> {prod.stock} unidades.</p>
        <button className={lightMode ? "cardBtn-light" : "cardBtn"}>
          <Link to={`/item/${prod.id}`}>Ver producto</Link>
        </button>
      </div>
    </div>
  );
};

export default Item;
