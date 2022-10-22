import "./navbar.css";
import React, { useState } from "react";
import FormBusqueda from "../FormBusqueda/FormBusqueda";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  //perdon por el hook chicos yo solo quiero mi responsive menu bien bonito
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <div className="header-container">
        <a href="/" className="header-brand">
          VYSOR
        </a>
        <div onClick={handleToggle} className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <nav>
        <ul className={`burger-menu ${isActive ? "burger-menu-active" : ""}`}>
          <li className="nav-texto">
            <a href="/">Eyeglasses</a>
          </li>
          <li className="nav-texto">
            <a href="/">Sunglasses</a>
          </li>
          <li className="nav-texto">
            <a href="/">Contacts</a>
          </li>
          <li className="nav-carrito">
            <a href="/" ><img src="./svg/iconocarrito.svg" alt="" /></a>
            <CartWidget />
            {/* CartWidget va acá */}
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
