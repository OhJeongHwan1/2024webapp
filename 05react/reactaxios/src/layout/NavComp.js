import React from "react";
import { Link } from "react-router-dom";

function NavComp() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavComp;
