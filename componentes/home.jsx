import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <div>
      <br /> <br />
      <h1>Bienvenido al Sistema de Gestión de Eventos</h1> <br />
      <br />
      <p>Bienvenidos a mi pagina de organizar eventos, donde puedes plasmar tus actividades de manera fácil y eficiente. <br />
        Con esta pagina puedes crear eventos y agregar detalles importantes como fecha, lugar y descripción de la actividad, <br />y mantener un registro organizado de tus actividades.<br />
        ¡QUE ESPERAR PARA USARLA¡</p>
      <br />
      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack direction="row" spacing={10}>
          <Link to="/events">
            {" "}
            <Button colorScheme="teal" variant="solid">
              Ver eventos 👁️
            </Button>
          </Link>

          <Link to="/event/create">
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
            >
              🔨 Crear nuevo evento
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
};

export default Home;
