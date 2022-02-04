//arrow function komponenta
//precica rafce
import React from "react";
import OneProduct from "./OneProduct";

const Products = ({ proizv, onAdd }) => {
  //const ime = "Naziv proizvoda";
  //const opis = "Neki opis mog proizvoda";
  //mozemo da posaljemo i ceo objekat a ne pojedinacne promenljive

  //const proiz = {
  //title: "Naziv proizvoda",
  //description: "Neki opis proizvoda",
  //};
  //onda u return umesto <OneProduct title={ime} description={opis} />
  //ubacicemo niz iz skirpte ali ne ovde nego u App.js jer ona moze da ga prosledi svuda ispod

  return (
    <div className="all-products">
      {proizv.map((proizvod) => {
        return (
          <OneProduct
            product={proizvod}
            key={proizvod.id}
            onAdd={onAdd}
            uKorpi={1}
          />
        );
      })}
      {/*<OneProduct product={proizv[0]} />
      <OneProduct product={proizv[1]} />
      <OneProduct product={proizv[2]} />*/}
    </div>
  );
};

export default Products;
