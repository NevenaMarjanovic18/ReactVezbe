import React from "react";
import OneProduct from "./OneProduct";

export const Korpa = ({ proizv }) => {
  return (
    <div className="cart-container">
      <h3>Ovo je tvoja korpa.</h3>
      {proizv.map((proizvod) => (
        <OneProduct product={proizvod} key={proizvod.id} uKorpi={0} />
      ))}
    </div>
  );
};
export default Korpa;
