import { GET_HOUSE } from "../constants";

export default (state = {}, action: any) => {
    switch (action.type) {
     case GET_HOUSE:
      return {
       result: action.payload
      }
     default:
      return state
    }
}
