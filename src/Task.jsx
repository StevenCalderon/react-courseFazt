import "./task.css";
export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1 style={{ fontWeight: "lighter" }}>Mi primer tarea</h1>
      <p
        style={ready ? { background: "green" } : { background: "red" }}
      >{ready ? "Tarea Realizada" : "Tarea pendiente"}</p>

      <span className={ready ? "emojiFeliz" : "emojiTriste"} >{ready ? "😊" : "😞"}</span>
    </div>
  );
}
