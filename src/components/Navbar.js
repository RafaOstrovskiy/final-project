import React, {useContext} from "react";
import FavoriteContext from "../contexts/caughtContext";
import { CatchingPokemon} from "@mui/icons-material";
import {AppBar, IconButton, Badge, Toolbar, Typography, styled, Box} from "@mui/material";
import {Link} from "react-router-dom";



const Navbar = () => {
    const StyledLink = styled(Link)({
        color: "inherit",
        textDecoration: "none",
        "&:hover": {
            color: "inherit",
        },
        display: "block"
    });
    const { caughtPokemons } = useContext(FavoriteContext);


  return (

          <AppBar position="static" sx={{
              marginBottom: '20px'
          }}
          >
              <Toolbar>
                  <Box sx={{ flexGrow: 1 }}>
                      <StyledLink to={'/'}>
                          <Typography
                              variant="h6"
                              component="h6"

                          >
                              Pokedex
                          </Typography>
                      </StyledLink>
                  </Box>
                  <StyledLink to={'/pokeball'}>
                      <IconButton
                          color="inherit"
                      >
                          <Badge
                              color="secondary"
                              badgeContent={caughtPokemons.length}
                          >
                              <CatchingPokemon />
                          </Badge>
                      </IconButton>
                  </StyledLink>
              </Toolbar>
          </AppBar>
  );
};

export default Navbar;
