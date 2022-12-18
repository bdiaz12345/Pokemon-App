import axios from 'axios';

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const LIKE_CHARACTER = 'LIKE_CHARACTER';
export const UNLIKE_CHARACTER = 'UNLIKE_CHARACTER';
export const GET_LIKED = 'GET_LIKED';

export const getCharacters = () => dispatch => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
        .then(res => {
            console.log(res)
            dispatch({type: GET_CHARACTERS, payload: res.data.results})
        })
}

export const likeCharacter = (character) => dispatch => {
    dispatch({type: LIKE_CHARACTER, payload: character})
}

export const unlikeCharacter = (character) => dispatch => {
    dispatch({type: UNLIKE_CHARACTER, payload: character})
}

export const getLiked = () => dispatch => {
    dispatch({type: GET_LIKED})
}