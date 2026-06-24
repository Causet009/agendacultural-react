import PropTypes from "prop-types";

function FiltroTipo({ filtro = "Todos", onFiltroChange }) {
  const opciones = ["Todos", "Concierto", "Teatro", "Exposicion"];

  return (
    <div style={{ margin: "15px 0" }}>
      <label htmlFor="tipo">
        <strong>Filtrar por tipo: </strong>
      </label>

      <select
        id="tipo"
        value={filtro}
        onChange={(e) => onFiltroChange(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "8px",
          marginLeft: "8px",
        }}
      >
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  );
}

FiltroTipo.propTypes = {
  filtro: PropTypes.oneOf(["Todos", "Concierto", "Teatro", "Exposicion"]),
  onFiltroChange: PropTypes.func.isRequired,
};

export default FiltroTipo;