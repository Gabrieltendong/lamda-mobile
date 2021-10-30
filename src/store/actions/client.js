import Toast from 'react-native-toast-message';

import { 
    followEnterprise,
    getProfilEnterprise,
    auth,
} from '../../api';

import { 
    UPDATE_LIST_FEED_ENTERPRISE, 
} from './type'

import { uiLoading } from './uiLoading'
import { store } from '../configureStore'

const user = store.getState().userReducer.memoryUser

export const follow_enterprise = (idFeed) => (dispatch) => {
    auth(user).then((res) => {
        followEnterprise(idFeed, res.data.access)
        .then((resp) => {
            Toast.show({
                visibilityTime: 10000,
                topOffset: 120,
                type: 'success',
                text1: 'Success',
                text2: 'Vous suivez desormais cette entreprise 👋'
            });
            console.log("resp follow client", resp.data)
        })
        .catch((err) => {
            Toast.show({
                visibilityTime: 10000,
                topOffset: 120,
                type: 'error',
                text1: 'Error',
                text2: 'Erreur lié au serveur, veuillez réessayer plutart'
            });
            console.log("err follow client", err)
        })
    })
}

export const get_profil_enterprise = (idClient) => (dispatch) => {
    dispatch(uiLoading())
    auth(user).then((res) => {
        getProfilEnterprise(idClient, res.data.access)
        .then((resp) => {
            dispatch(uiLoading())
            dispatch({
                type: UPDATE_LIST_FEED_ENTERPRISE,
                value: resp.data.publications
            })
            console.log("resp profil client", JSON.stringify(resp.data))
        })
        .catch((err) => {
            dispatch(uiLoading())
            console.log("err profil client", err)
        })
    })
}