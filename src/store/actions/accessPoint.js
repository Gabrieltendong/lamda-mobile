import * as geolib from 'geolib';
import Geolocation from '@react-native-community/geolocation';
import WifiManager from "react-native-wifi-reborn";
import Toast from 'react-native-toast-message';

import { auth, getAccessPoint } from '../../api'
import { uiLoading } from './uiLoading'
import {
    UPDATE_ACCES_POINT,
    SET_ERROR,
} from './type'
import { store } from '../configureStore'
import { checkAccessLocation } from '../../utils'

export const getAllAccessPoint = () => (dispatch) => {
    const user = store.getState().userReducer.memoryUser
    
    dispatch(uiLoading())
    auth(user)
    .then((res) => {
        console.log("auth", res.data)
        getAccessPoint(res.data.access)
        .then((resp) => {
            resp.data.map((wifi) => {
                Geolocation.getCurrentPosition(
                  (position) => {
                    // console.log(position)
                   wifi['distance'] =  (geolib.getPreciseDistance(position.coords, {
                          latitude: parseFloat(wifi.latitude),
                          longitude:  parseFloat(wifi.longitude),
                        })/1000)
                    dispatch({
                        type: UPDATE_ACCES_POINT,
                        value: wifi
                    })
                  },
                  () => {
                      alert('Position could not be determined.');
                  }
                )
            })
            dispatch(uiLoading())
            console.log("response access point", resp.data)
        })
        .catch((error) => {
            dispatch(uiLoading())
            console.log("error access point", error)
        })
    })  
}

export const connectWifi = (wifi) => (dispatch) => {
    dispatch(uiLoading())
    WifiManager.connectToProtectedSSID(wifi.designation, wifi.password, false).then(
        () => {
            dispatch(uiLoading())
            Toast.show({
                visibilityTime: 10000,
                topOffset: 120,
                type: 'success',
                text1: 'Success',
                text2: 'Vous etes connecté au wifi 👋'
            });
            console.log("Connected successfully!");
        },
        () => {
            dispatch(uiLoading())
            Toast.show({
                visibilityTime: 10000,
                topOffset: 120,
                type: 'error',
                text1: 'Error',
                text2: 'Impossible de se connecter a ce wifi 👋'
            });
            console.log("Connection failed!");
        }
    );
}