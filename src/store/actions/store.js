import { 
    getStore,
    auth
} from '../../api';

import { 
    UPDATE_LIST_STORE, 
} from './type'

import { uiLoading } from './uiLoading'
import { store } from '../configureStore'

const user = store.getState().userReducer.memoryUser

export const get_stores = () => (dispatch) => {
    console.log("test-------------------------------", user)
    dispatch(uiLoading())
    auth(user).then((res) => {
        getStore(res.data.access)
        .then((resp) => {
            dispatch(uiLoading())
            dispatch({
                type: UPDATE_LIST_STORE,
                value: resp.data
            })
            console.log("resp store", JSON.stringify(resp.data))
        })
        .catch((err) => {
            dispatch(uiLoading())
            console.log("err get store", err)
        })
    })
}