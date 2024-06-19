import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="shop">
        <Link className="link" to="/shop"> <h1>SHOPPING</h1></Link>
      </div>
      <div className="cart">
        <Link className="link" to="/cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <sup>{props.count}</sup>
        </Link>
      </div>
    </div>
  );
};

export default Header;
