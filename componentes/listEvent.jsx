import React, { useContext } from "react";
import { EventContext } from "../context/eventContext";
import { Link } from "react-router-dom";
import { Stack, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const ListEvent = () => {
  // Obtener el estado del contexto de eventos
  const { state } = useContext(EventContext);
  // Extraer la lista de eventos del estado
  const { events } = state;

  return (
    <div>
      <h1>LISTA DE EVENTOS</h1>
      <br />
      <ol>
        {/* Mapear sobre la lista de eventos y mostrar cada evento como un elemento de lista */}
        {events.map((event) => (
          <Link key={event.id} to={`/event/${event.id}`}>
            <li key={event.id}>{event.name} / {event.date}</li>
          </Link>
        ))}
      </ol>
      <br />
      <br />
      <Stack direction="row" spacing={10}>
        <Link to="/">
          <Button colorScheme="teal" variant="solid">
            PAGINA PRINCIPAL 🏡
          </Button>
        </Link>
        <Link to="/event/create">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="outline"
          >Crear 🛠️
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

export default ListEvent;
