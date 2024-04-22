import axios from "axios";

export const AUTH_URL = 'http://mern-auth-server-q1n565nrg-ajin-thomas-projects.vercel.app/api'

export const axiosPrivate = axios.create({
    baseURL: AUTH_URL,  
    headers:{'Content-Type': 'application/json'},  
    withCredentials:true
})