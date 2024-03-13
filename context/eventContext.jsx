import React, { createContext, useReducer, useEffect } from "react";

export const EventContext = createContext();

export const initialState = {
  events: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_EVENT":
      return {
        ...state,
        events: [...state.events, action.event],
      };
    case "EDIT_EVENT":
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.event.id ? action.event : event
        ),
      };
    case "DELETE_EVENT":
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.id),
      };
    default:
      return state;
  }
}

export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // Obtenemos los eventos del localStorage al cargar la aplicación
    const events = JSON.parse(localStorage.getItem("events")) || [];
    dispatch({ type: "SET_EVENTS", events });
  }, []);

  useEffect(() => {
    // Guardamos los eventos en el localStorage cada vez que se actualice el estado
    localStorage.setItem("events", JSON.stringify(state.events));
  }, [state.events]);
  return (
    <EventContext.Provider value={{ state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};
