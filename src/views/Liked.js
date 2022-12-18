import React, { useEffect } from "react";
import LikedCard from "../components/LikedCard";
import styled from "styled-components";
import { getLiked } from "../actions";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

const MainContainer = styled.div`
    width: 100%;
    height: 93vh;
    margin-top: 7vh;
    display: flex;
    justify-content: space-evenly;
    flex-flow: wrap;
`

const Liked = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!props.liked.length) {
            dispatch(getLiked());
        }
        console.log(props)
    }, [])

    return (
        <MainContainer>
            {props.liked.length ? props.liked.map(char => {
                return (
                    <LikedCard key={char} character={char}/>
                )
            })
            :
            null}
        </MainContainer>
    )
}

const mapStateToProps = (state) => ({
    liked: state.liked
})

export default connect(mapStateToProps, {getLiked})(Liked);