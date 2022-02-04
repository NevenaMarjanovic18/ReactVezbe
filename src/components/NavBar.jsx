//function kompomenta
//precica rfce
import React from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar({ brojKorpe }) {
  //const brojKorpe = 0;
  return (
    <div className="navBar">
      <Link to="/">My Store</Link>
      <Link to="/korpa" className="cart-items">
        <BsCartFill></BsCartFill>
        <p className="cart-num">{brojKorpe}</p>
      </Link>
    </div>
  );
}

export default NavBar;
