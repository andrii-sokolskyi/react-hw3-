import { GET_HOUSE, GO_TO_NEXT_PAGE, GO_TO_PREV_PAGE } from "../constants";

interface housesDefaultStateInterface {
  pageNumber: number;
  data: object
}
const housesDefaultState: housesDefaultStateInterface = {
  pageNumber: 1,
  data: {}
}

export default (state = housesDefaultState, action: any) => {
    switch (action.type) {
     case GET_HOUSE:
        return {
          ...state,
          data: {
            ...state.data,
            [state.pageNumber]: action.payload
          }
        }
      case GO_TO_NEXT_PAGE:
        return {
          ...state,
          pageNumber: state.pageNumber + 1
        }

      case GO_TO_PREV_PAGE:
        const result = state.pageNumber - 1;
        return {
          ...state,
          pageNumber: result < 1 ? 1 : result
        }
      
     default:
      return state
    }
}
