import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import { getCharacters } from '../actions';
import DashCard from '../components/DashCard';

const MainContainer = styled.div`
    width: 100%;
    height: 93vh;
    margin-top: 7vh;
    display: flex;
    justify-content: space-evenly;
    flex-flow: wrap;
`

const Dashboard = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        if (!props.characters.length) {
            dispatch(getCharacters());
        }
        console.log(props)
    }, [])

    return (
        <MainContainer>
            {props.characters ? props.characters.map(char => {
                return (
                    <DashCard key={char} character={char}/>
                )
            })
            :
            null}
        </MainContainer>
    )
}

const mapStateToProps = (state) => ({
    characters: state.characters
})

export default connect(mapStateToProps, {getCharacters})(Dashboard);