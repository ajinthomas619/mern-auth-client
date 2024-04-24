import {useDispatch, useSelector } from "react-redux"
import {User} from 'lucide-react'
import { UserData } from "../utils/interface/interface";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { clearUser, getUser } from "../redux/slices/userSlices";


const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const currentUser = useSelector( (state : UserData )=> state.persisted.user.userData);
  useEffect(() => {
   if (!currentUser) {
     navigate("/log-in");
   }else{
     navigate('/Home')
   }
 }, []);
 console.log(currentUser)
 useEffect(()=>{
  dispatch(getUser(currentUser))
 },[])


 const logout = async() => {
  try{
    axios.get("https://jmjmusichouse.joeleldho.com/api/logout")
    dispatch(clearUser())
   navigate("/")
  }
  catch(error){
    console.log("error in logout",error)
  }
 }
  return (
    <>
    <div className="flex flex-col items-center justify-evenly gap-16">
    <User className="h-16 w-16 rounded-full mt-16"/>
    <h2 className="text-center mt-5 font-black text-3xl text-red-500">welcome {currentUser.firstname}</h2>
    <button  className="w-1/4 border bg-fuchsia-950 py-4 px-4 rounded-2xl text-white font-bold text-xl" onClick={logout}>Logout</button>


    </div>
    </>
  )
}

export default HomePage