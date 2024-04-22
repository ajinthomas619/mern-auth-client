import axios from "axios";

export const AUTH_URL = 'http://mern-auth-server-production.up.railway.app/api'

export const axiosPrivate = axios.create({
    baseURL: AUTH_URL,  
    headers:{'Content-Type': 'application/json'},  
    withCredentials:true
})