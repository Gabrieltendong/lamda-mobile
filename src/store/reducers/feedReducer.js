import { UPDATE_LIST_FEED, SET_LIST_COMMENT_FEED } from '../actions/type'

const initialState = {
    list: [],
    listComment: []
}

const feedReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case UPDATE_LIST_FEED:
            nextState = {
                ...state,
                list: action.value
            }
            return nextState;
        case SET_LIST_COMMENT_FEED:
            nextState = {
                ...state,
                listComment: action.value
            }
            return nextState;
        default:
            return state;
    }
}

export default feedReducer;