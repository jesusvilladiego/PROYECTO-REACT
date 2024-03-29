import React, { useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { EventContext } from "../context/eventContext";
import { useToast, Stack, Button } from "@chakra-ui/react";

const EditEvent = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(EventContext);
  const { events } = state;

  const event = events.find((event) => event.id === id);
  const eventCopy = JSON.parse(JSON.stringify(event)); // Hacer una copia profunda de event
  const [updatedEvent, setUpdatedEvent] = useState(eventCopy);
  const toast = useToast(); // Inicializar el hook useToast

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent({ ...updatedEvent, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    if (updatedEvent.numberOfPeople >= 15) {
      // Validar que el número de personas sea mayor o igual a 15
      dispatch({ type: "EDIT_EVENT", event: updatedEvent });
    } else {
      // Mostrar una alerta utilizando useToast
      toast({
        title: "Error",
        description: "El número de personas debe ser mayor o igual a 15",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      {event && (
        <div>
          <h2>Editar Evento</h2>
          <form onSubmit={handleUpdate}>
            <label>
              Nombre :
              <input
                className="input"
                type="text"
                name="name"
                value={updatedEvent.name}
                onChange={handleChange}
              />
            </label>
            <hr /><br />
            <label>
              Fecha:
              <input
                className="input"
                type="date"
                name="date"
                value={updatedEvent.date}
                onChange={handleChange}
              />
            </label><hr /><br />
            <label>
              Lugar:
              <input
                className="input"
                type="text"
                name="place"
                value={updatedEvent.place}
                onChange={handleChange}
              />
            </label><hr /><br />
            <label>
              Número de personas:
              <input
                className="input"
                type="number"
                name="numberOfPeople"
                value={updatedEvent.numberOfPeople}
                onChange={handleChange}
              />
            </label><hr /><br />
            <label>
              Descripcion :
              <input
                className="input"
                type="text"
                name="descripcion"
                value={updatedEvent.descripcion}
                onChange={handleChange}
              />
            </label>
            <br />
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Stack direction="row" spacing={10}>
                <Button type="submit" colorScheme="blue">
                  Guardar ✅
                </Button>
                <Link to="/events">
                  <Button colorScheme="teal">Cancelar 🚫</Button>
                </Link>
              </Stack>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditEvent;
