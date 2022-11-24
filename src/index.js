import React from "react";
import ReactDOM from "react-dom/client"; //Necesito react dom desde lado del cliente.
import { Greeting, UserCard } from "./Greeting"; //importando el componente
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { Task } from "./Task";

const rootElement = document.getElementById("root"); // obtengo el elemento "id:root" del index.html
const root = ReactDOM.createRoot(rootElement); // Es un elemento que React lo usa bastante es el elemento raiz

root.render(
  <div>
    <Button text="click me" />
    <Button text="Don't Click me" />
    <Button text="" category="Action" />

    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Bienvenido");
      }}
    />

    <UserCard
      name="Steven Calderon"
      amount={0.01}
      married={false}
      points={[10, 20]}
      address={{ street: "123 Per Street", city: "India York" }}
    />

    <UserCard
      name="Katherin Monago"
      amount={200000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Inca Street", city: "Pe York" }}
    /> */}
  </div>
);
