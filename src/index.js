import React, { useState } from "react";
import ReactDOM from "react-dom/client"; //Necesito react dom desde lado del cliente.

const rootElement = document.getElementById("root"); // obtengo el elemento "id:root" del index.html
const root = ReactDOM.createRoot(rootElement); // Es un elemento que React lo usa bastante es el elemento raiz

function Counter() {
  const [counter, setCounter] = useState(0);
  const [message, setMessage] = useState("");
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Sumar
      </button>

      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Restar
      </button>

      <button
        onClick={() => {
          setCounter(1000);
        }}
      >
        Resetear
      </button>

      <input
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          alert(message);
        }}
      >
        Alert
      </button>
    </>
  );
}

root.render(
  <>
    <Counter />
  </>
);
