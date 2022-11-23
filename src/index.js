import React from "react";
import ReactDOM from "react-dom/client"; //Necesito react dom desde lado del cliente.

const rootElement = document.getElementById("root"); // obtengo el elemento "id:root" del index.html
const root = ReactDOM.createRoot(rootElement); // Es un elemento que React lo usa bastante es el elemento raiz

function Greeting() {
  const married = false;
  return <h1>{married ? "Estoy casado 😒" : "No estoy casado 😅"}</h1>;
}

root.render(
  <div>
    {Greeting()} {/* Forma antigua*/}
    <Greeting></Greeting> {/* Si deseamos insertar algo en el medio*/}
    <Greeting /> {/* Mas actual y comun */}
  </div>
);
