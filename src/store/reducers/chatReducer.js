import { GET_CHAT_ID } from '../actions/type'

const initialState = {
    idChat: '',
}

const chatReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case GET_CHAT_ID:
            nextState = {
                ...state,
                idChat: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default chatReducer;