import "./App.css";
import NavBar from "./components/NavBar"; //importujemo nasu komponentu
import Products from "./components/Products";

function App() {
  //const prom = <h3>Caooooo</h3>;
  return (
    <div className="App">
      <NavBar> </NavBar>

      <Products />
    </div>
  );
}

export default App; //OBAVEZNO, da kada je neka druga komponenta pozove ona mogla da se ucita, tj da se ucita ovo sto se nalazi u return delu
