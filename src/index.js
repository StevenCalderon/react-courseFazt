import React from "react";
import ReactDOM from "react-dom/client"; //Necesito react dom desde lado del cliente.

const rootElement = document.getElementById("root"); // obtengo el elemento "id:root" del index.html
const root = ReactDOM.createRoot(rootElement); // Es un elemento que React lo usa bastante es el elemento raiz

function Greeting() {
  return (
    <div>
      <h1> Post </h1>
      <p>
        Lentejas ballenas brooklyn por las mudas queman quedo celeste, con por
        que diana el llanura pulso de, de arroyo pisan de los arcos amor. Por
        tierra bajaba pies celeste para tierra de nino, pero tránsito me atrás
        celeste imperturbable la quedo poniendo carcajadas, apariencia al se los
        la la llenando.
      </p>
    </div>
  );
}

root.render(
  <div>
    {Greeting()} {/* Forma antigua*/}
    <Greeting></Greeting> {/* Si deseamos insertar algo en el medio*/}
    <Greeting /> {/* Mas actual y comun */}
  </div>
);
