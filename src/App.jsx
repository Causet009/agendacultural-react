import { useState } from "react";
import { eventos } from "./data/eventos";
import ListaEventos from "./components/ListaEventos.jsx";
import FiltroTipo from "./components/FiltroTipo.jsx";
import "./App.css";

function App() {
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  function handleBusquedaChange(e) {
    const textoSeguro = e.target.value.slice(0, 50);
    setBusqueda(textoSeguro);
  }

  const busquedaNormalizada = busqueda.trim().toLowerCase();

  const eventosGratuitos = eventos.filter((evento) => evento.esGratuito).length;

  const eventosFiltrados = eventos.filter((evento) => {
    const coincideTipo =
      filtroTipo === "Todos" || evento.tipo === filtroTipo;

    const coincideBusqueda = evento.nombre
      .toLowerCase()
      .includes(busquedaNormalizada);

    return coincideTipo && coincideBusqueda;
  });

  return (
    <div>
      <h1>AgendaCultural</h1>
      <p>Total de eventos cargados: {eventos.length}</p>
      <p>Eventos gratuitos: {eventosGratuitos}</p>

      <div style={{ margin: "20px 0" }}>
        <label htmlFor="busqueda">
          <strong>Buscar evento: </strong>
        </label>

        <input
          id="busqueda"
          type="text"
          placeholder="Buscar por nombre"
          value={busqueda}
          onChange={handleBusquedaChange}
          maxLength={50}
          style={{
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #aaa",
            marginLeft: "8px",
          }}
        />

        <FiltroTipo filtro={filtroTipo} onFiltroChange={setFiltroTipo} />
      </div>

      <p>Eventos visibles: {eventosFiltrados.length}</p>

      {eventosFiltrados.length > 0 ? (
        <ListaEventos eventos={eventosFiltrados} />
      ) : (
        <p style={{ fontWeight: "bold", color: "#8a1f1f" }}>
          No hay eventos que coincidan
        </p>
      )}
    </div>
  );
}

export default App;