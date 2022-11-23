import React from "react";
import ReactDOM from "react-dom/client"; //Necesito react dom desde lado del cliente.

const rootElement = document.getElementById("root"); // obtengo el elemento "id:root" del index.html
const root = ReactDOM.createRoot(rootElement); // Es un elemento que React lo usa bastante es el elemento raiz
root.render(<h1>Hello World</h1>);
