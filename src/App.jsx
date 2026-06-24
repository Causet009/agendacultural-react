import { eventos } from "./data/eventos";
import EventoCard from "./components/EventoCard.jsx";
import "./App.css";

function App() {
  console.log(eventos);

  const primerEvento = eventos[0];

  return (
    <div>
      <h1>AgendaCultural</h1>
      <p>Total de eventos cargados: {eventos.length}</p>

      <EventoCard
        nombre={primerEvento.nombre}
        lugar={primerEvento.lugar}
        duracion={primerEvento.duracion}
        tipo={primerEvento.tipo}
        descripcion={primerEvento.descripcion}
        fechas={primerEvento.fechas}
      />
    </div>
  );
}

export default App;