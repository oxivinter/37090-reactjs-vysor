import "./navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormBusqueda from "../FormBusqueda/FormBusqueda";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  // hook para menu responsive - no es requerimiento de la entrega
    const [isNavActive, setNavActive] = useState("false");

  const handleNavToggle = () => {
    setNavActive(!isNavActive);
  };

  return (
    <header>
      <div className="header-container">
        <Link className="header-brand" to="/">VYSOR</Link>
        <div onClick={handleNavToggle} className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <nav>
        <ul className={`burger-menu ${isNavActive ? "burger-menu-active" : ""}`}>
          <li className="nav-texto">
            <Link to="/category/1">Eyeglasses</Link>
          </li>
          <li className="nav-texto">
          <Link to="/category/2">Sunglasses</Link>
          </li>
          <li className="nav-texto">
          <Link to="/category/3">Contacts</Link>
          </li>
          <li className="nav-carrito">
            <CartWidget />
          </li>
          <li className="nav-busqueda">
            <FormBusqueda />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
