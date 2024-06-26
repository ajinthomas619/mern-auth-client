import axios from "axios";

export const AUTH_URL = 'https://jmjmusichouse.joeleldho.com/api'  

export const axiosPrivate = axios.create({
    baseURL: AUTH_URL,  
    headers:{'Content-Type': 'application/json'},  
    withCredentials:true
})