import "./navbar.css";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FormBusqueda from "../FormBusqueda/FormBusqueda";
import CartWidget from "../CartWidget/CartWidget";
import { LightModeContext } from "../../context/lightMode";

const Navbar = () => {
  // hook para menu responsive - no es requerimiento de la entrega
    const [isNavActive, setNavActive] = useState("false");

    const { lightMode } = useContext(LightModeContext);

  const handleNavToggle = () => {
    setNavActive(!isNavActive);
  };

  return (
    <header>
      <div className={lightMode ? "header-container-light" : "header-container"}>
        <Link className={lightMode ? "header-brand-light" : "header-brand"} to="/">VYSOR</Link>
        <div onClick={handleNavToggle} className={lightMode ? "burger-light" : "burger"}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <nav>
        <ul className={`burger-menu ${isNavActive ? "burger-menu-active" : ""} ${lightMode ? "nav-light" : ""}`}>
          <li className={lightMode ? "nav-texto nav-texto-light" : "nav-texto"}>
            <Link to="/category/1">Eyeglasses</Link>
          </li>
          <li className={lightMode ? "nav-texto nav-texto-light" : "nav-texto"}>
          <Link to="/category/2">Sunglasses</Link>
          </li>
          <li className={lightMode ? "nav-texto nav-texto-light" : "nav-texto"}>
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
