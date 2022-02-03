import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//metoda renderer, prima dva parametra, prvi je element a drugi container (to je mesto gde ce se rendorovati nas element)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //containter "u dokumentu pretrazi preko IDja i nadji onaj ciji je ID= root i nadje ga tako u index.html"
);

//ReactDOM.render(<h1>Cao svima!</h1>, document.getElementById("root"));
