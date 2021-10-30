import { UPDATE_LIST_STORE } from '../actions/type'

const initialState = {
    list: [],
}

const storeReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case UPDATE_LIST_STORE:
            nextState = {
                ...state,
                list: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default storeReducer;