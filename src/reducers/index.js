import { GET_CHARACTERS, GET_LIKED, LIKE_CHARACTER, UNLIKE_CHARACTER } from "../actions";

const initialState = {
    characters: [],
    liked: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        case LIKE_CHARACTER:
            return {
                ...state,
                characters: state.characters.filter(char => {
                    return char !== action.payload
                }),
                liked: [...state.liked, action.payload]
            }
        case UNLIKE_CHARACTER:
            return {
                ...state,
                characters: [...state.characters, action.payload],
                liked: state.liked.filter(char => {
                    return char !== action.payload
                })
            }
        case GET_LIKED:
            return {
                ...state,
                liked: state.liked
            }
        default:
            return state
    }
}

export default reducer;