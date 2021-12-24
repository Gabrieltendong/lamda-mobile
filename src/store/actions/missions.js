import { 
    getListSondage,
    auth,
    answers
} from '../../api';

import { 
    GET_MISSIONS, 
} from './type'

import { uiLoading } from './uiLoading'
import { store } from '../configureStore'
import Toast from 'react-native-toast-message';

const user = store.getState().userReducer.memoryUser

const toast = (type, text1, text2) => {
    Toast.show({
        visibilityTime: 10000,
        topOffset: 120,
        type,
        text1,
        text2
    });
}

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

export const handleAnswer = (data) => (dispatch) =>{
    dispatch(uiLoading())
    auth(user).then((res) => {
        answers(res.data.access, data)
        .then((resp) => {
            dispatch(uiLoading())
            if(!resp.data.success) toast("error", "Error", resp.data.message)
            else toast("success", "Succès", resp.data.message)
            console.log("resp missions", resp.data)
        })
        .catch((err) => {
            dispatch(uiLoading())
            console.log("err missions", err)
        })
    })
}