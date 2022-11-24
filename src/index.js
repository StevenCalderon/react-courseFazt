import React from "react";
import ReactDOM from "react-dom/client"; //Necesito react dom desde lado del cliente.
import { Greeting } from "./Greeting"; //importando el componente
import Product, { Navbar } from "./Product";

const rootElement = document.getElementById("root"); // obtengo el elemento "id:root" del index.html
const root = ReactDOM.createRoot(rootElement); // Es un elemento que React lo usa bastante es el elemento raiz

root.render(
  <div>
    <Greeting title="hola mundo" name="juan"/> {/* Mas actual y comun */}
    <Greeting />
    <Greeting />
    <Greeting />
    <Product></Product>
    <Navbar></Navbar>
  </div> 
);
