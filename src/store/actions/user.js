import Toast from 'react-native-toast-message';
import Contacts from 'react-native-contacts';
var _ = require('lodash')
import { signUp, activeAccount,auth, getProfil, getAbonne, getPiecesOr, getNotifications, updateProfil } from '../../api'
import { uiLoading } from './uiLoading'
import {
    ACTIVE_ACCOUNT,
    HOMESTACK
} from "../../constants/routeName"
import {
    MEMORY_USER,
    SET_ERROR,
    SET_USER,
    SET_PROFIL,
    UPDATE_ABONNE_LIST,
    UPDATE_PIECE_OR,
    UPDATE_NOTIFICATION
} from './type'
import { store } from '../configureStore'

const ToastError = () => {
    Toast.show({
        visibilityTime: 10000,
        topOffset: 120,
        type: 'error',
        text1: 'Error',
        text2: 'Impossible de se connecter, email ou mot de passe incorrect'
    });
}

export const register = (data, navigation, user) => (dispatch) => {
    dispatch(uiLoading())
    signUp(data)
    .then((resp) => {
        dispatch(uiLoading())
        if(resp.data && resp.data.data && resp.data.data.active){
            dispatch({
                type: MEMORY_USER,
                value: user
            })
            navigation.navigate(ACTIVE_ACCOUNT)
        }
        if(resp.data.data && Array.isArray(resp.data.data.email)){
            dispatch({
                type: SET_ERROR,
                value: resp.data.data.email
            })
        }
        if(!resp.data.success){
            Toast.show({
                visibilityTime: 10000,
                topOffset: 120,
                type: 'error',
                text1: 'Erreur',
                text2: resp.data.message
            });
        }
        console.log("response register", resp.data)
    })
    .catch((error) => {
        dispatch(uiLoading())
        console.log("error register", error)
    })
}

export const confirmeCode = (code, navigation) => (dispatch) => {
    const user = store.getState().userReducer.memoryUser
    console.log("user", user)
    dispatch(uiLoading())
    activeAccount(code)
    .then((res) => {
        dispatch(uiLoading())
        if(res.data && res.data.data && res.data.data.active){
            dispatch(login(user, navigation))
        }
        console.log("res code", res.data)
    })
    .catch((err) => {
        dispatch(uiLoading())
        console.log("error code", err)
    })
}

export const login = (data, navigation) => (dispatch) => {
    
    dispatch(uiLoading())
    auth(data)
    .then((resp) => {
        dispatch(uiLoading())
        if(resp.data.access){
            dispatch({
                type: MEMORY_USER,
                value: data
            })
            dispatch({
                type: SET_USER,
                value: resp.data
            })
            navigation.navigate(HOMESTACK)
        }else{
            ToastError()
        }
        console.log("response login", resp.data)
    })
    .catch((error) => {
        dispatch(uiLoading())
        ToastError()
        console.log("error login", error)
    })
}

export const getProfilUser = () => (dispatch) => {
    const user = store.getState().userReducer.user
    const memoryUser = store.getState().userReducer.memoryUser
    auth(memoryUser)
    .then((res) => {
        getProfil(user.abonne, res.data.access)
        .then((resp) => {
            dispatch({
                type: SET_PROFIL,
                value: resp.data
            })
            console.log("resp get profil", resp.data)
        })
        .catch((err) => {
            console.log("err profil", err)
        })
    })
}

export const get_abonne = () => (dispatch) => {
    const memoryUser = store.getState().userReducer.memoryUser
    auth(memoryUser)
    .then((res) => {
        getAbonne(res.data.access)
        .then(async (resp) => {
            const contacts = await Contacts.getAll()
            const numbers = _.keyBy(contacts, (contact) => contact?.phoneNumbers[0]?.number)
            const newAbonneList = resp.data.filter(item => numbers[item.telephone])
            dispatch({
                type: UPDATE_ABONNE_LIST,
                value: newAbonneList
            })
            console.log("resp get abonne", newAbonneList)
        })
        .catch((err) => {
            console.log("err abonne", err)
        })
    })
}

export const update_profil = (data) => (dispatch) => {
    dispatch(uiLoading())
    const memoryUser = store.getState().userReducer.memoryUser
    auth(memoryUser)
    .then((res) => {
        updateProfil(res.data.abonne, data, res.data.access)
        .then((resp) => {
            dispatch(uiLoading())
            // dispatch(getProfilUser())
            Toast.show({
                visibilityTime: 10000,
                topOffset: 120,
                type: 'success',
                text1: 'Success',
                text2: 'Votre profil a été mis à jour'
            });
            console.log("resp update profil", resp.data)
        })
        .catch((err) => {
            dispatch(uiLoading())
            console.log("err update", err)
        })
    })
}

export const get_piece_or = (idAction) => (dispatch) => {
    const memoryUser = store.getState().userReducer.memoryUser
    auth(memoryUser)
    .then((res) => {
        getPiecesOr(idAction, res.data.access)
        .then((resp) => {
            dispatch({
                type: UPDATE_PIECE_OR,
                value: resp.data.data
            })
            Toast.show({
                visibilityTime: 10000,
                topOffset: 120,
                type: 'success',
                text1: 'Success',
                text2: resp.data.message
            });
            console.log("resp get piece or", resp.data)
        })
        .catch((err) => {
            console.log("err abonne", err)
        })
    })
}


export const get_notifications = () => (dispatch) => {
    const memoryUser = store.getState().userReducer.memoryUser
    auth(memoryUser)
    .then((res) => {
        getNotifications(res.data.user, res.data.access)
        .then((resp) => {
            dispatch({
                type: UPDATE_NOTIFICATION,
                value: resp.data
            })
        })
        .catch((err) => {
            console.log("err abonne", err)
        })
    })
}
