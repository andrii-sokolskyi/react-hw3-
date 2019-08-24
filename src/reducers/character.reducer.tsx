import { GET_CHARACTER } from "../constants";
import { Character } from "../models/character";

export default (state = {}, action: any) => {
    switch (action.type) {
     case GET_CHARACTER:
      return {
        ...state,
        [action.payload.id]: action.payload.data
      }
     default:
      return state
    }
}
