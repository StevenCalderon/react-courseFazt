import "./task.css";
export function TaskCard() {
  const CardStyle = { background: "#202020", color: "white", padding: "20px" };
  return (
    <div className="card">
      {/* Estilos en linea */}
      <h1 style={{ fontWeight: "lighter" }}>Mi primer tarea</h1>
      <p>Tarea Realizada</p>
    </div>
  );
}
