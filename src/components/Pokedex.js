import React from "react";
import Pokemon from "./Pokemon";
import {CircularProgress, Container, Grid, Pagination} from "@mui/material";


const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const handleChange = (event, value) => {
    setPage(value - 1);
  };

  return (
    <Container sx={{
      display: "flex",
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      {loading ?
            <CircularProgress/>
       : (
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
        >
          {pokemons.map((pokemon) => {
            return <Grid item xs={12} sm={6} md={4} lg={3}>
              <Pokemon pokemon={pokemon} key={pokemon.id}/>
            </Grid>
          })}
        </Grid>
      )}
      <Pagination page={page + 1} count={total} onChange={handleChange} sx={{
          marginTop: '20px',
          alignSelf: 'center'
      }}/>
    </Container>
  );
};

export default Pokedex;
