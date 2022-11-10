import "./cartwidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <Link to="/cart">
        <img class="invert" src="./svg/iconocarrito.svg" alt="" />
      </Link>
    </>
  );
};

export default CartWidget;
