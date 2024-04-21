import axios from "axios";

export const AUTH_URL = 'https://Mern-auth-env.eba-u2r4khjy.ap-south-1.elasticbeanstalk.com /api'

export const axiosPrivate = axios.create({
    baseURL: AUTH_URL,  
    headers:{'Content-Type': 'application/json'},  
    withCredentials:true
})