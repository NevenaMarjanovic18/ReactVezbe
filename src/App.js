import "./App.css";
import NavBar from "./components/NavBar"; //importujemo nasu komponentu
import Products from "./components/Products";
import Korpa from "./components/Korpa";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //const prom = <h3>Caooooo</h3>;

  //let brojKorpe = 0;
  //const [state, setstate] = useState(initialState);
  const [brojKorpe, setBrojKorpe] = useState(0);
  const [brojProizv, setBrojProizv] = useState([]);
  const [proizv, setProizv] = useState([
    {
      id: 1,
      title: "Chocolate",
      description:
        "Chocolate is a food made from cacao beans. It is used in many desserts like pudding, cakes and candy",
      amount: 0,
    },
    {
      id: 2,
      title: "Lollypop",
      description:
        "Lollipops are available in a number of colors and flavors, particularly fruit flavors.",
      amount: 0,
    },
    {
      id: 3,
      title: "Ice Cream",
      description:
        "Ice cream is a sweetened frozen food typically eaten as a snack or dessert.",
      amount: 0,
    },
  ]);
  function refreshKorpa() {
    let noviProizvodi = proizv.filter((proizvod) => proizvod.amount > 0);
    setBrojProizv(noviProizvodi);
  }
  function dodajProizvod(title, id) {
    console.log("Dodat je proizvod: " + title);
    //brojKorpe++;
    setBrojKorpe(brojKorpe + 1);
    //console.log("Broj proizvoda u korpi: " + brojKorpe);
    proizv.forEach((proizvod) => {
      if (proizvod.id === id) {
        proizvod.amount++;
      }
      console.log(proizvod.amount);
    });
    refreshKorpa();
    // proizv.map((proizvod)=>{ fja map nam trazi da uvek vratimo nesto!
    //  if(proizvod.id===id){
    //   proizvod.amount++;
    // }
    // return blabla;
    //});
  }

  return (
    <BrowserRouter className="App">
      <NavBar brojKorpe={brojKorpe}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Products proizv={proizv} onAdd={dodajProizvod} />}
        />
        <Route path="/korpa" element={<Korpa proizv={brojProizv} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; //OBAVEZNO, da kada je neka druga komponenta pozove ona mogla da se ucita, tj da se ucita ovo sto se nalazi u return delu
