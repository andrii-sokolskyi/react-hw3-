import { GET_CHARACTER, GET_HOUSE, LOAD_START, LOAD_END } from '../constants';
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

export const getHouse = () => (dispatch: any) => {
    dispatch({
        type: GET_HOUSE,
        payload: 'result_of_simple_action'
    })
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