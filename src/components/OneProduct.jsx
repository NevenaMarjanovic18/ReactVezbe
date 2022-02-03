import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

function OneProduct() {
  return (
    <div className="card" style={{ margin: 10, borderStyle: "dotted" }}>
      <img
        className="card-img-top"
        src="https:/picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">Product name</h3>
        <p className="card-text">Opis proizvoda</p>
      </div>
      <button className="btn">
        <BsPlusLg />
      </button>
      <button className="btn">
        <BiMinus />
      </button>
    </div>
  );
}

export default OneProduct;
