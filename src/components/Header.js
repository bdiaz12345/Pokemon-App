import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
    background: #121212;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
`

const Title = styled.h1`
    font-family: sans-serif;
    color: #ffffff;

    &:hover {
        cursor: pointer;
    }
`

const Liked = styled.button`
    background: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    padding: .5rem 1rem;
    border-radius: .25rem;
    margin-right: 5rem;

    &:hover {
        background: #ffffff;
        border: 1px solid #121212;
        color: #121212;
        cursor: pointer;
    }
`

const Header = () => {
    const history = useNavigate();

    const routeToDash = () => {
        history('/');
    }

    const routeToLiked = () => {
        history('/liked');
    }

    return (
        <MainContainer>
            <Title onClick={routeToDash}>Poke-Tinder</Title>
            <Liked onClick={routeToLiked}>Liked</Liked>
        </MainContainer>
    )
}

export default Header;