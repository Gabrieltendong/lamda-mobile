import axios from 'axios'

export const BASE_URL = "https://lamda-technology.herokuapp.com/api/v1"
export const URL = "https://lamda-technology.herokuapp.com"
export const URL_WEBSOCKET = "wss://lamda-technology.herokuapp.com/ws/chat/"

export const http = axios.create({
    baseURL: BASE_URL
})
