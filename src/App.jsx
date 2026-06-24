import { eventos } from "./data/eventos";
import ListaEventos from "./components/ListaEventos.jsx";
import "./App.css";

function App() {
  console.log(eventos);

  return (
    <div>
      <h1>AgendaCultural</h1>
      <p>Total de eventos cargados: {eventos.length}</p>

      <ListaEventos eventos={eventos} />
    </div>
  );
}

export default App;