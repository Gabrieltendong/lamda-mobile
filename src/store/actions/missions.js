import { 
    getListSondage,
    auth
} from '../../api';

import { 
    GET_MISSIONS, 
} from './type'

import { uiLoading } from './uiLoading'
import { store } from '../configureStore'

const user = store.getState().userReducer.memoryUser

export const get_missions_list = () => (dispatch) => {
    dispatch(uiLoading())
    auth(user).then((res) => {
        getListSondage(res.data.access)
        .then((resp) => {
            dispatch(uiLoading())
            dispatch({
                type: GET_MISSIONS,
                value: resp.data
            })
            console.log("resp missions", JSON.stringify(resp.data))
        })
        .catch((err) => {
            dispatch(uiLoading())
            console.log("err get missions", err)
        })
    })
}