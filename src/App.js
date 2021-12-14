import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import { CaughtProvider } from "./contexts/caughtContext";
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pokeball from "./pages/Pokeball";
import InfoPage from "./pages/InfoPage";

const { useState, useEffect } = React;

const localStorageKey = "caught_pokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [caughts, setCaughts] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${12 * page}`)
      const promises = response.data.results.map(async (pokemon) => {
        const pokemonData = await axios.get(pokemon.url);
        return pokemonData.data
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.floor(898 / 12));
      setNotFound(false);
    } catch (err) {
      console.error(err)
    }
  };

  const loadCaughtPokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setCaughts(pokemons);
  };

  useEffect(() => {
    loadCaughtPokemons();
  }, []);

  useEffect(() => {
      fetchPokemons();
  }, [page]);

  const updateCaughtPokemons = (name) => {
    const updated = [...caughts];
    const isCaught = updated.indexOf(name);
    if (isCaught >= 0) {
        pokemons.isCaught = false;
      updated.splice(isCaught, 1);
    } else {
        pokemons.date = new Date()
        pokemons.isCaught = true;
        updated.push(name);
    }
    setCaughts(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
  };


  return (
        <CaughtProvider
          value={{
                caughtPokemons: caughts,
                updateCaughtPokemons: updateCaughtPokemons,
                loading: loading,
                pokemons: pokemons,
                page: page,
                setPage: setPage,
                total: total,
                notFound: notFound
          }}
        >
        <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path='/:id' element={<InfoPage/>} />
                <Route path="/Pokeball" element={<Pokeball />}/>
            </Routes>
    </CaughtProvider>
  );
}
