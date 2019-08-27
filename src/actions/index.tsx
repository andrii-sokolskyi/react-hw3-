import { GET_CHARACTER, GET_HOUSE, LOAD_START, LOAD_END, GO_TO_NEXT_PAGE, GO_TO_PREV_PAGE } from '../constants';
import axios from 'axios';
import { Character } from '../models/character';

export const getCharacter = (id: number | string) => (dispatch: any) => {
    dispatch({
        type: LOAD_START
    })

    axios.get(`https://www.anapioficeandfire.com/api/characters/${id}`)
        .then((response: {data: Character}) => {
            dispatch({
                type: GET_CHARACTER,
                payload: {data: response.data, id }
            })
            dispatch({
                type: LOAD_END
            })
        })
        .catch( error => console.log(error))
}

export const getHouse = (pageNumber: number) => async (dispatch: any) => {
    dispatch({
        type: LOAD_START
    })

    try {
        const res = await fetch(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}`);
        const response = await res.json();
    
        dispatch({
          payload: response,
          type: GET_HOUSE
        });
        dispatch({
            type: LOAD_END
        });
    } catch (error) {
        dispatch({
          type: LOAD_END
        });
    }

}

export const loadStart = () => (dispatch: any) => {
    dispatch({
        type: LOAD_START
    })
}

export const loadEnd = () => (dispatch: any) => {
    dispatch({
        type: LOAD_END
    })
}

export const goToNextPage = () => ( dispatch:  any) => {
    dispatch({
        type: GO_TO_NEXT_PAGE
    })
}

export const goToPrevPage = () => ( dispatch:  any) => {
    dispatch({
        type: GO_TO_PREV_PAGE
    })
}