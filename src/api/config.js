import axios from 'axios'

export const BASE_URL = "https://lamda-cm.herokuapp.com/api/v1"
export const URL = "https://lamda-cm.herokuapp.com"

export const http = axios.create({
    baseURL: BASE_URL
})
