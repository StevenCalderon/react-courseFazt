import React from "react";
import ReactDOM from "react-dom/client"; //Necesito react dom desde lado del cliente.
import { Greeting, UserCard } from "./Greeting"; //importando el componente
import Product, { Navbar } from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Posts } from "./Posts";

const rootElement = document.getElementById("root"); // obtengo el elemento "id:root" del index.html
const root = ReactDOM.createRoot(rootElement); // Es un elemento que React lo usa bastante es el elemento raiz

const users = [
  { id: 1, name: "Ryan Ray", image: "https://robohash.org/user1" },
  { id: 2, name: "Joe", image: "https://robohash.org/user2" },
  { id: 3, name: "Stevn", image: "https://robohash.org/user3" },
  { id: 4, name: "David", image: "https://robohash.org/user4" },
];

root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <p>{user.name}</p>
          <img src={user.image} />
        </div>
      );
    })}

    <p></p>
  </>
);
