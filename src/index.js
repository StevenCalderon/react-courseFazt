import React from "react";
import ReactDOM from "react-dom/client"; //Necesito react dom desde lado del cliente.
import { Greeting, Goodbye } from "./Greeting"; //importando el componente
import Pepa,{Navbar} from "./Product"

const rootElement = document.getElementById("root"); // obtengo el elemento "id:root" del index.html
const root = ReactDOM.createRoot(rootElement); // Es un elemento que React lo usa bastante es el elemento raiz

root.render(
  <div>
    <Greeting /> {/* Mas actual y comun */}
    <Goodbye />
    <Pepa></Pepa>
    <Navbar></Navbar>
  </div>
);
