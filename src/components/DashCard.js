import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useDispatch, connect } from "react-redux";
import { likeCharacter } from "../actions";
import { fadeInUp } from 'react-animations';

const fadeAnimation = keyframes `${fadeInUp}`

const MainContainer = styled.div`
    width: 30%;
    height: 40%;
    display: flex;
    flex-direction: column;
    border-radius: .5rem;
    transition: .25s ease-in-out;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem 0;
    animation: .5s ${fadeAnimation};

    &:hover {
        transform: scale(1.1);
        transition: .25s ease-in-out;
    }
`

const Name = styled.h2`
    font-family: sans-serif;
`

const Picture = styled.img`
    object-fit: cover;
    width: 50%;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 90%;
`

const DashCard = (props) => {
    const [pokeImage, setPokeImage] = useState('');
    const dispatch = useDispatch();
    const pokemon = props.character;

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-form/${pokemon.url.slice(34, -1)}/`)
            .then(res => {
                console.log(res.data)
                setPokeImage(res.data.sprites.front_default)
            })
    }, [pokemon])

    const onLike = (e) => {
        dispatch(likeCharacter(e));
    }

    return (
        <MainContainer>
            <Name>{pokemon.name}</Name>
            <Picture src={pokeImage} />
            <ButtonContainer>
                <IconButton onClick={() => {onLike(pokemon)}}>
                    <FavoriteBorderIcon />
                </IconButton>
            </ButtonContainer>
        </MainContainer>
    )
}

const mapStateToProps = (state) => ({
    characters: state.characters
})

export default connect(mapStateToProps, {likeCharacter})(DashCard);