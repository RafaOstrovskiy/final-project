import React, {useContext} from 'react';
import Pokedex from "../components/Pokedex";
import {Container} from "@mui/material";
import FavoriteContext from "../contexts/caughtContext";

const Homepage = () => {
    const { pokemons, page, setPage, total, loading, notFound } = useContext(FavoriteContext);
    return (
        <Container>
            {notFound ? (
                <h2>
                    Page not found:(
                </h2>
            ) : (
                <Pokedex
                    loading={loading}
                    pokemons={pokemons}
                    page={page}
                    setPage={setPage}
                    total={total}
                />
            )}
        </Container>
    );
};

export default Homepage;