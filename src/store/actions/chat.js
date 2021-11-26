import {
    auth,
    getChatId
} from '../../api';

import { 
    GET_CHAT_ID, 
} from './type'

import { uiLoading } from './uiLoading'
import { store } from '../configureStore'

const user = store.getState().userReducer.memoryUser

export const get_chat_id = (idAbonne1, idAbonne2) => (dispatch) => {
    dispatch(uiLoading())
    return auth(user).then((res) => {
            return getChatId(res.data.access, idAbonne1, idAbonne2)
            .then((resp) => {
                dispatch(uiLoading())
                dispatch({
                    type: GET_CHAT_ID,
                    value: resp.data.idchat
                })
                console.log("resp chat id", resp.data)
            })
            .catch((err) => {
                dispatch(uiLoading())
                console.log("err get chat id", err)
            })
        })
}