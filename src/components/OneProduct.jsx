import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

//function OneProduct(props) {

//DESTRUKTURIRANJE props objekta
function OneProduct({ product, onAdd, uKorpi }) {
  //console.log(props);
  // function onAdd(title) {
  //  console.log("Dodat proizvod:" + title);
  //}
  return (
    <div
      className={uKorpi === 1 ? "card" : "card-cart"}
      style={{ margin: 10, borderStyle: "dotted" }}
    >
      <img
        className={uKorpi == 1 ? "card-img-top" : "card-img-left"}
        src="https:/picsum.photos/200"
        alt="Neka slika"
      />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
      </div>
      {/*<button className="btn" onClick={() => onAdd(product.title)}>*/}
      {uKorpi === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            <BsPlusLg />
          </button>
          <button className="btn">
            <BiMinus />
          </button>
        </>
      ) : (
        <h4>Kolicina: {product.amount}</h4>
      )}
    </div>
  );
}

export default OneProduct;
