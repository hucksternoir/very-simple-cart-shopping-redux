import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/cart"}>Cart</Link>
          <Link to={"/"}>Products</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
