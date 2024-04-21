import React, { useState } from "react";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginFunction } from "../utils/api/methods/post";
import { addUser } from "../redux/slices/userSlices";

interface FormErrors {
  email?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    let errors: FormErrors = {};
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    try {
      const response: any = await LoginFunction({
        email,
        password,
      });

      console.log(response.data.status);

      if (response.data.status) {
        navigate("/Home");
        console.log("Login successful:", response.data);
        dispatch(addUser(response.data.user));
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-md rounded-2xl shadow-xl border border-black py-4 px-4 justify-evenly">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="flex flex-row justify-between mb-10">
            <h2 className="text-center mt-5 font-black text-3xl text-fuchsia-950">
              Fill what we know
            </h2>
            <h2 className="text-center mt-5 font-black text-3xl text-red-500">
              !
            </h2>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="mb-5 w-full">
              <input
                id="contactInfo"
                className="w-full border-b-2 border-black rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-indigo-200"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-5 w-full">
              <div className="border-b-2 border-black flex flex-row w-full">
                <input
                  id="password"
                  placeholder="Password"
                  className="w-full rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-indigo-200"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="flex py-3 focus:outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Eye />
                </button>
              </div>
              {formErrors.password && (
                <p className="text-red-500 text-xs">{formErrors.password}</p>
              )}
            </div>
            <button
              className="w-full border bg-fuchsia-950 py-4 px-4 rounded-2xl text-white font-bold text-xl"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
