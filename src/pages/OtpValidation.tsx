import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, clearUser } from "../redux/slices/userSlices";
import { UserData } from "../utils/interface/interface";
import { verifyOtpFunctiom } from "../utils/api/methods/post";
import toast ,{Toaster}from 'react-hot-toast';

const OTPValidation = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = async (e: any) => {
    try {
      const response: any = await verifyOtpFunctiom({ otp: otp });
      console.log("otp respnse",response);
      if (response.data?.status === false) {
        toast.error("Invalid OTP");
      } else {
        const data: UserData = {
          firstname: response.data.user?.firstname ?? "",
          lastname: response.data.user?.lastname ?? "",
          email: response.data.user?.email ?? "",
          password: response.data.user?.password ?? "",
          mobile: response.data.user?.mobile ?? ""
        };
        console.log("user data", data);
        dispatch(clearUser());
        dispatch(addUser(data));
        console.log(response?.data, "response.data");
        if (response?.data?.status) {
          toast.success(response?.data?.message);
          navigate("/Home", { replace: true });
        } else {
          toast.error(response?.data?.message);
        }
      }
    } catch (error) {
      console.error("Error validating otp", error);
      toast.error("Error Validating Otp");
    }
  };

  useEffect(() => {
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validate(otp);
        }}
      >
        <div className="flex flex-col items-center justify-center h-screen">
          <h4 className="text-bold text-2xl">Enter The otp number sent to your mail</h4>
          <input
            className="w-1/4 rounded border text-lg leading-tight py-3 px-2 mb-4 focus:outline-indigo-200"
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            className="w-1/4 border bg-fuchsia-950 py-4 px-4 rounded-2xl text-white font-bold text-xl"
            type="submit"
          >
            Verify OTP
          </button>
        </div>
      </form>
    </>
  );
};

export default OTPValidation;
