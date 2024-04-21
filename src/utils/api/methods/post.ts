import axios from "axios";
import { Login_Api,Signup_Api,VerifyOTP_Api,Logout_Api } from "../endpoints/common";

export const LoginFunction = async(data:any) => {
    try{
        return axios.create({withCredentials:true}).post(Login_Api,data)
    }
    catch(error){
        return error
    }
}
export const Logoutfunction = async() => {
    try{
        return axios.create({withCredentials:true}).get(Logout_Api);
    }
    catch(error){
        return error
    }
}
export const SignUpFunction = async(data:any) => {
    try{
        return axios.create({withCredentials:true}).post(Signup_Api,data)
    }
    catch(error){
        return error
    }
}

export const verifyOtpFunctiom = async(data:any) => {
    try{
        return axios.create({withCredentials:true}).post(VerifyOTP_Api,data)
    }
    catch(error){
        return error
    }
}



