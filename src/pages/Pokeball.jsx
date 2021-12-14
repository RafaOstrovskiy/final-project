import React, {useContext} from 'react';
import {Button, Container, Grid, Typography} from "@mui/material";
import Pokemon from "../components/Pokemon";
import CaughtContext from "../contexts/caughtContext";
import {Link} from "react-router-dom";

const Pokeball = () => {
    const { pokemons, caughtPokemons} = useContext(CaughtContext);

    return (
        <Container sx={{
            display: "flex",
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {caughtPokemons.length ?
                (
                    <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          spacing={2}
                    >
                        {pokemons.map((pokemon) => {
                            if (caughtPokemons.includes(pokemon.name)) {
                                return <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Pokemon pokemon={pokemon} key={pokemon.id}/>
                                </Grid>
                            }
                        })}
                    </Grid>
                )
                : <Typography variant={'h4'} component={'div'} sx={{textAlign:'center',}}>
                    Oops...your pokeball is empty:(
            </Typography>
            }
            <Link to={'/'}>
                <Button variant={'contained'} color={'secondary'} sx={{marginTop: '20px'}}>
                    Go back to HomePage
                </Button>
            </Link>
            </Container>
    );
};

export default Pokeball;