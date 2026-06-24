import { eventos } from "./data/eventos";
import "./App.css";

function App() {
  console.log(eventos);

  return (
    <div>
      <h1>AgendaCultural</h1>
      <p>Total de eventos cargados: {eventos.length}</p>
    </div>
  );
}

export default App;