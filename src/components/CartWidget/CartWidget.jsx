import "./cartwidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <img className="invert" src="./svg/iconocarrito.svg" alt="" />
      </Link>
    </>
  );
};

export default CartWidget;
