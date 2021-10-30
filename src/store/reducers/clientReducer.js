import { UPDATE_LIST_FEED_ENTERPRISE } from '../actions/type'

const initialState = {
    listFeed: [],
}

const clientReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case UPDATE_LIST_FEED_ENTERPRISE:
            nextState = {
                ...state,
                listFeed: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default clientReducer;