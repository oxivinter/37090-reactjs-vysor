import "./cartwidget.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LightModeContext } from "../../context/lightMode";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { getItemQuantity } = useContext(CartContext)
  const { lightMode } = useContext(LightModeContext);

  return (
    <>
    {getItemQuantity() > 0 &&
      <p className="widget-itemQty">
        {getItemQuantity()}
      </p>
    }
      <Link to="/cart">
        <img className={lightMode ? "" : "invert"} src="./svg/iconocarrito.svg" alt="" />
      </Link>
    </>
  );
};

export default CartWidget;
