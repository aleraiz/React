import React from "react";
import CartWidget from "./CartWidget";

const MenuNavbar = () => {
  return (
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Productos
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contacto
          </a>
        </li>
        <li class="nav-item">
        <CartWidget/>
          
        </li>
      </ul>
    </div>
  );
};

export default MenuNavbar;
