import { 
    SET_USER,
    MEMORY_USER,
    SET_PROFIL,
    UPDATE_ABONNE_LIST,
    UPDATE_PIECE_OR,
    UPDATE_NOTIFICATION
} from '../actions/type'

const initialState = {
    user: {},
    memoryUser: {},
    profil: {},
    list_abonne: [],
    piece_or: '',
    notifications: []
}

const userReducer = (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case SET_USER:
            nextState = {
                ...state,
                user: action.value
            }
            return nextState;
        case MEMORY_USER:
            nextState = {
                ...state,
                memoryUser: action.value
            }
            return nextState;
        case SET_PROFIL:
            nextState = {
                ...state,
                profil: action.value
            }
            return nextState;
        case UPDATE_ABONNE_LIST:
            nextState = {
                ...state,
                list_abonne: action.value
            }
            return nextState;
        case UPDATE_PIECE_OR:
            nextState = {
                ...state,
                piece_or: action.value
            }
            return nextState;
        case UPDATE_NOTIFICATION:
            nextState = {
                ...state,
                notifications: action.value
            }
            return nextState;    
        default:
            return state;
    }
}

export default userReducer