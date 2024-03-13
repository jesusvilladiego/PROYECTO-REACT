import React, { useState, useContext } from "react";
import { EventContext } from "../context/eventContext";
import {useToast,FormControl,FormLabel,FormHelperText,Button,Stack,} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const CreateEvent = () => {
  const { dispatch } = useContext(EventContext);
  const toast = useToast();

  const [reservation, setReservation] = useState({
    id: "",
    name: "",
    date: "",
    place: "",
    numberOfPeople: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      reservation.name &&
      reservation.date &&
      reservation.place &&
      reservation.numberOfPeople &&
      reservation.descripcion
    ) {
      if (parseInt(reservation.numberOfPeople) < 15) {
        toast({
          title: "Error",
          description: "El número de personas debe ser igual a 15 o mayor",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }

      const newEvent = {
        ...reservation,
        id: uuidv4(),
      };

      dispatch({ type: "ADD_EVENT", event: newEvent });
      setReservation({
        id: "",
        name: "",
        date: "",
        place: "",
        numberOfPeople: "",
        descripcion: "",
      });

      toast({
        title: "Evento creado con éxito",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <h1>CREAR EVENTO</h1> 
      <hr /><br />
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Nombre:</FormLabel>
          <input
            className="input"
            type="name"
            name="name"
            value={reservation.name}
            onChange={handleChange}
          />
          <FormHelperText>Ingrese nombre de la persona </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Fecha:</FormLabel>
          <input
            className="input"
            type="date"
            name="date"
            value={reservation.date}
            onChange={handleChange}
          />
          <FormHelperText>Ingrese la fecha del evento </FormHelperText>
        </FormControl>
        <hr />
        <FormControl isRequired>
          <FormLabel>Lugar:</FormLabel>
          <input
            className="input"
            type="text"
            name="place"
            value={reservation.place}
            onChange={handleChange}
          />
          <FormHelperText>Donde quiere realizar el evento </FormHelperText>
        </FormControl>
        <hr />
        <FormControl isRequired>
          <FormLabel>Número de personas:</FormLabel>
          <input
            className="input"
            type="number"
            name="numberOfPeople"
            value={reservation.numberOfPeople}
            onChange={handleChange}
          />
          <FormHelperText>Cantidad de personas </FormHelperText>
        </FormControl>
        <hr />
        <FormControl isRequired>
          <FormLabel>Descripcion</FormLabel>
          <input
            className="input"
            type="name"
            name="descripcion"
            value={reservation.descripcion}
            onChange={handleChange}
          />
          <FormHelperText>agrega algo importante del evento </FormHelperText>
        </FormControl>
        <hr />
        <hr />
        <br />

        <Button
          type="submit"
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
        >
          Crear 🛠️
        </Button>
      </form>{" "}
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack direction="row" spacing={10}>
          <Link to="/">
            <Button colorScheme="teal" variant="solid">
              PAGINA PRINCIPAL 🏡
            </Button>
          </Link>

          <Link to="/events">
            <Button colorScheme="blue" variant="solid">
              LISTA DE EVENTOS 📃
            </Button>
          </Link>
          <br />
        </Stack>
      </div>
    </div>
  );
};

export default CreateEvent;
