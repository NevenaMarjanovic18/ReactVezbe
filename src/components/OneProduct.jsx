import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

//function OneProduct(props) {

//DESTRUKTURIRANJE props objekta
function OneProduct({ product, onAdd }) {
  //console.log(props);
  // function onAdd(title) {
  //  console.log("Dodat proizvod:" + title);
  //}
  return (
    <div className="card" style={{ margin: 10, borderStyle: "dotted" }}>
      <img
        className="card-img-top"
        src="https:/picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      {/*<button className="btn" onClick={() => onAdd(product.title)}>*/}
      <button className="btn" onClick={() => onAdd(product.title)}>
        <BsPlusLg />
      </button>
      <button className="btn">
        <BiMinus />
      </button>
    </div>
  );
}

export default OneProduct;
