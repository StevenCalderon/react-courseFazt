export function Greeting({ title = " Hola ", name = "Anonimo" }) {
  console.log(name);
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

function Goodbye() {
  return <h2> Chao Amigos</h2>;
}

export function UserCard({ name, amount, points, married, address, greet }) {
  console.log(greet)
  return (
    <div>
      <h1>{name}</h1>
      <h2> UserCard </h2>
      <p>Amount: {amount}💵</p>
      <p>Points: {points[1]}</p>
      <p>State: {married ? "Married" : "Single"} </p>
      <p>Address</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Street: {address.street}</li>
      </ul>
    </div>
  );
}
