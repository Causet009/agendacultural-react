import PropTypes from "prop-types";

function EventoCard({
  nombre = "Evento sin nombre",
  lugar = "Lugar no disponible",
  duracion = 0,
  tipo = "Concierto",
  descripcion = "Sin descripcion disponible",
  fechas = [],
  esGratuito = false,
}) {
  const estilosTipo = {
    Concierto: {
      backgroundColor: "#d4f8d4",
      color: "#1c6b1c",
    },
    Teatro: {
      backgroundColor: "#fff3b0",
      color: "#7a5c00",
    },
    Exposicion: {
      backgroundColor: "#d7e8ff",
      color: "#174a8b",
    },
  };

  const estiloActual = estilosTipo[tipo] || estilosTipo.Concierto;

  return (
    <article
      style={{
        border: esGratuito ? "3px solid #1c6b1c" : "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        margin: "12px",
        width: "280px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {esGratuito && (
        <span
          style={{
            backgroundColor: "#1c6b1c",
            color: "white",
            padding: "6px 10px",
            borderRadius: "8px",
            fontWeight: "bold",
            display: "inline-block",
            marginBottom: "10px",
          }}
        >
          GRATIS
        </span>
      )}

      <h2>{nombre}</h2>

      <span
        style={{
          ...estiloActual,
          padding: "6px 10px",
          borderRadius: "8px",
          fontWeight: "bold",
          display: "inline-block",
          marginBottom: "10px",
        }}
      >
        {tipo}
      </span>

      <p>
        <strong>Lugar:</strong> {lugar}
      </p>

      <p>
        <strong>Duracion:</strong>{" "}
        {duracion > 0 ? `${duracion} minutos` : "No aplica"}
      </p>

      <p>{descripcion}</p>

      <p>
        <strong>Fechas:</strong>
      </p>

      <ul>
        {fechas.map((fecha) => (
          <li key={fecha}>{fecha}</li>
        ))}
      </ul>
    </article>
  );
}

EventoCard.propTypes = {
  nombre: PropTypes.string,
  lugar: PropTypes.string,
  duracion: PropTypes.number,
  tipo: PropTypes.oneOf(["Concierto", "Teatro", "Exposicion"]),
  descripcion: PropTypes.string,
  fechas: PropTypes.arrayOf(PropTypes.string),
  esGratuito: PropTypes.bool,
};

export default EventoCard;