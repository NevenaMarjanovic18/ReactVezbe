//function kompomenta
//precica rfce
import React from "react";
import { BsCartFill } from "react-icons/bs";

function NavBar({ brojKorpe }) {
  //const brojKorpe = 0;
  return (
    <div className="navBar">
      <a>My Store</a>
      <div className="cart-items">
        <BsCartFill></BsCartFill>
        <p className="cart-num">{brojKorpe}</p>
      </div>
    </div>
  );
}

export default NavBar;
