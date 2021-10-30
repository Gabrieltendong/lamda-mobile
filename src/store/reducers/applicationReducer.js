import { IS_LOADIND, SET_ERROR } from '../actions/type'

const initialState = {
    isLoading: false,
    errors: {}
}

const applicationReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case IS_LOADIND:
            nextState = {
                ...state,
                isLoading: !state.isLoading
            }
            return nextState;
        case SET_ERROR:
            nextState = {
                ...state,
                errors: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default applicationReducer;