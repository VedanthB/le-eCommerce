import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Cart from "./icon/cart.svg";
import { Link } from "react-router-dom";
// import axios from "axios";

function Header() {
  const value = useContext(GlobalState);
  return (
    <header>
      <div className="menu">
        <img src={Menu} alt="" width="30" />
      </div>

      <div className="logo">
        <h1>
          <Link to="/"> MERN E-Commerce </Link>
        </h1>
      </div>

      <ul>
        <li>
          <Link to="/products"> Products </Link>
        </li>
        <li>
          <Link to="/login"> Login / Register </Link>
        </li>
        <li>
          <img src={Close} alt="" width="30" />
        </li>
      </ul>

      <div className="cart-icon">
        <span>0</span>
        <Link>
          <img src={Cart} alt="" width="30" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
