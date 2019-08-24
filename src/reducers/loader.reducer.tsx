import { LOAD_END, LOAD_START } from "../constants";

export default (state = { loadingCounter: 0}, action: any) => {
    switch (action.type) {
        case LOAD_START:
            return {
                loadingCounter: state.loadingCounter + 1
            }
        case LOAD_END:
            return {
                loadingCounter: state.loadingCounter - 1
            }
        default:
            return state
    }
}
