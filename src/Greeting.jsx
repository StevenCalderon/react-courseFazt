export function Greeting({title=" Hola ",name="Anonimo"}) {
  console.log(name)
  return <h1>{title}, dice {name}</h1>;
}

export function Goodbye() {
    return <h2> Chao Amigos</h2>
}
