import React from "react";

const CaughtContext = React.createContext({
  caughtPokemons: [],
  updateCaughtPokemons: (id) => null
});

export const CaughtProvider = CaughtContext.Provider;

export default CaughtContext;
