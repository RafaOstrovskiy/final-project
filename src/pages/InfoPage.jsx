import React, {useEffect, useState} from 'react';
import {Box, Container, Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import axios from "axios";

const InfoPage = () => {
    const { id } = useParams();
    const [name, setName] = useState();
    const [img, setImg] = useState();
    const [abilities, setAbilities] = useState();
    const [types, setTypes] = useState();
    const [weight, setWeight] = useState();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
            setName(response.data.name);
            setImg(response.data.sprites.other["official-artwork"].front_default);
            setAbilities(response.data.abilities[0].ability.name);
            setTypes(response.data.types[0].type.name);
            setWeight(response.data.weight);
        });
    }, []);
    return (
        <Container>
            <Box sx={{
                display: "flex",
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                border: '2px solid black'
            }}>
                <img src={img} alt={name}/>
                <Box sx={{
                    display: "flex",
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant={'h6'}>Name</Typography>
                        <Typography variant={'body1'}>{name}</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant={'h6'}>Abilities</Typography>
                        <Typography variant={'body1'}>{abilities}</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant={'h6'}>Weight:</Typography>
                        <Typography variant={'body1'}>{weight}</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography variant={'h6'}>Type:</Typography>
                        <Typography variant={'body1'}>{types}</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default InfoPage;