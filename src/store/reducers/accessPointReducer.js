import { UPDATE_ACCES_POINT} from '../actions/type'

const initialState = {
    list: [],
}

const accessPointReducer = (state = initialState, action) => {
    let nextState;

    switch (action.type) {
        case UPDATE_ACCES_POINT:
            let index = state.list.findIndex((item) => item.id == action.value.id)
            if(index == -1){
                nextState = {
                    ...state,
                    list: [...state.list, action.value]
                }
                return nextState;
            }
            return state
        default:
            return state;
    }
}

export default accessPointReducer;