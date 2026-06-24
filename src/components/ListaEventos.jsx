import PropTypes from "prop-types";
import EventoCard from "./EventoCard.jsx";

function ListaEventos({ eventos = [] }) {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "12px",
      }}
    >
      {eventos.map((evento) => (
        <EventoCard
          key={evento.id}
          nombre={evento.nombre}
          lugar={evento.lugar}
          duracion={evento.duracion}
          tipo={evento.tipo}
          descripcion={evento.descripcion}
          fechas={evento.fechas}
          esGratuito={evento.esGratuito}
        />
      ))}
    </section>
  );
}

ListaEventos.propTypes = {
  eventos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      nombre: PropTypes.string,
      lugar: PropTypes.string,
      duracion: PropTypes.number,
      tipo: PropTypes.oneOf(["Concierto", "Teatro", "Exposicion"]),
      descripcion: PropTypes.string,
      fechas: PropTypes.arrayOf(PropTypes.string),
      esGratuito: PropTypes.bool,
    })
  ),
};

export default ListaEventos;