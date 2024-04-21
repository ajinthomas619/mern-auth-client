import Landingpage from "../pages/Landingpage";
import SigninPage from "../pages/SigninPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import OTPValidation from "../pages/OtpValidation";
import '../globals.css'; // Importing global styles
import { Routes, Route } from 'react-router-dom';
import '../globals.css'

const UserRoutes = () => {
    return (
        <main className="flex-h-screen">
            <Routes>
             
                <Route path="/" element={<Landingpage />} /> 
                <Route path="/log-in" element={<SigninPage />} />
                <Route path="/sign-up" element={<SignupPage />} />
                <Route path="/verify-otp" element={<OTPValidation />} />
                <Route path="/Home" element={<HomePage />} />
            </Routes>
        </main>
    );
}

export default UserRoutes
