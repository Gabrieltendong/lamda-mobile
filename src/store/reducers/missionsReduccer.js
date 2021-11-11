import { GET_MISSIONS } from '../actions/type'

const initialState = {
    list: [],
}

const missionsReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case GET_MISSIONS:
            nextState = {
                ...state,
                list: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default missionsReducer;