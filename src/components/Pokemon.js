import React, {useContext} from "react";
import FavoriteContext from "../contexts/caughtContext";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { caughtPokemons, updateCaughtPokemons } = useContext(
    FavoriteContext
  );
  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
  };
  const main_types = Object.keys(colors);

  const releaseButton = <Button variant={'contained'} color={'error'}>Release</Button>
  const catchButton = <Button variant={'contained'} color={'success'}>Catch</Button>

  const catcher = caughtPokemons.includes(pokemon.name) ? releaseButton : catchButton;

  const clickCatch = (e) => {
    e.preventDefault();
    updateCaughtPokemons(pokemon.name);
  };
  const chooseColor = () => {
    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    return colors[type];
}

  return (
    <Card sx={{
      maxWidth: 345,
      background: chooseColor(),
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center'
    }}>
      <CardActionArea>
        <Link to={`/${pokemon.id}`}>
          <CardMedia
              component={'img'}
              height={'250px'}
              image={pokemon.sprites.front_default}
              alt={pokemon.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" color="text.secondary">
              #{pokemon.id}
            </Typography>
            <Typography variant="h4">
              {pokemon.name}
            </Typography>
            {pokemon.isCaught ? <Typography variant={'body1'}>{pokemon.date.toLocaleString()}</Typography>
                : <></>
            }
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Button onClick={clickCatch}>
          <div>{catcher}</div>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Pokemon;
