import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { EventProvider } from "../context/eventContext";
import Home from "../componentes/home";
import ListEvent from "../componentes/listEvent";
import CreateEvent from "../componentes/createEvent";
import EventDetails from "../componentes/eventDetails";


function App() {
  return (
    <ChakraProvider>
      <EventProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<ListEvent />} />
            <Route path="/event/create" element={<CreateEvent />} />
            <Route path="/event/:id" element={<EventDetails />} />
          </Routes>
        </Router>
      </EventProvider>
    </ChakraProvider>
  );
}

export default App;
