import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpFunction } from "../utils/api/methods/post";
import { Eye } from "lucide-react";

interface FormErrors {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  mobile?: string;
  confirmPassword?: string;
}

const SignupForm: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactMode, setContactMode] = useState<"email" | "phone">("email");
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [showPassword,setShowPassword] = useState(false)

  const navigate = useNavigate();

  const validateForm = () => {
    let errors: FormErrors = {};

    if (!firstname.trim()) {
      errors.firstname = "First Name is required";
    }
    if (!lastname.trim()) {
      errors.lastname = "Last Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    }
 
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  console.log("hi")
    const isValid = validateForm();
    console.log(isValid,"validated form")

    if (!isValid) {
      return;
    }

    try {
      const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        mobile: mobile,
        password: password,
        confirmPassword: confirmPassword,
      };

      const response = await SignUpFunction(data);
      console.log("response of signup",response);
      

      if (response) {
        console.log("Registration successful:", response);
        setFirstname("");
        setLastname("");
        setEmail("");
        setMobile("");
        setPassword("");
        setConfirmPassword("");

        navigate("/verify-otp");
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("Registration failed:", (error as Error).message);
    }
  };

  return (
    <>
      <div className="w-full flex justify-end">
        <div className="w-full flex rounded-2xl shadow-xl  border border-black py-4 px-4 mr-4  justify-evenly">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className=" flex flex-row justify-between">
              <h2 className="mb-10 text-center mt-5 font-black text-3xl text-fuchsia-950">
                Let us Know
              </h2>
              <h2 className="mb-10 text-center mt-5 font-black text-3xl text-red-500">
                !
              </h2>
              <a href="/log-in" className="px-5 mb-10 text-center mt-5 font-black text-3xl">
  <span style={{ color: '#3A244A',textDecorationColor:'#3A244A',borderBottom:'2px solid #3A244A' }}>Sign</span>
  <span style={{ color: '#D72638',textDecorationColor:'#D72638',borderBottom:'2px solid #D72638' }}> In</span>
</a>            </div>
            <div className="flex flex-col items-center w-full max-w-md">
              <div className="mb-5 w-full max-w-md">
                
                <input
                  id="firstname"
                  placeholder="first name"
                  className="w-full  rounded text-lg leading-tight py-3 
                  px-2 mb-4 focus:outline-indigo-200 border-b-2 border-black"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                {formErrors.firstname && (
                  <p className="text-red-500 text-xs">{formErrors.firstname}</p>
                )}
              </div>
              <div className="mb-5 w-full max-w-md">
              
                <input
                  id="lastname"
                  placeholder="last name"
                  className="w-full  rounded text-lg leading-tight py-3 
                  px-2 mb-4 focus:outline-indigo-200 border-b-2 border-black"
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                {formErrors.lastname && (
                  <p className="text-red-500 text-xs">{formErrors.lastname}</p>
                )}
              </div>

              <div className="mb-7 border-b-2 border-black flex flex-row w-full max-w-md">
             
                <input
                  id="password"
                  placeholder='password'
                  className="w-full rounded text-lg leading-tight py-3 
                  px-2 mb-4 focus:outline-indigo-200"
                  type={showPassword?"text":"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                 className="flex  py-3 focus:outline-none"
                 onClick={() => setShowPassword(!showPassword)}
                >


                <Eye />
                </button>
                {formErrors.password && (
                  <p className="text-red-500 text-xs">{formErrors.password}</p>
                )}
              </div>
              <div className="mb-7 flex flex-row w-full max-w-md border-b-2 border-black">
              
                <input
                  id="confirmpassword"
                  placeholder="confirm password"
                  className="w-full rounded text-lg leading-tight py-3 
                  px-2 mb-4 focus:outline-indigo-200"
                  type={showPassword?"text":"password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                 <button
                 className="flex py-3  focus:outline-none"
                 onClick={() => setShowPassword(!showPassword)}
                >
                <Eye />
                </button>
                {formErrors.confirmPassword && (
                  <p className="text-red-500 text-xs">
                    {formErrors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="mb-5 w-full max-w-md">
                <label htmlFor="contactMode" className="block mb-1">
                  Contact Mode
                </label>
                <select
                  id="contactMode"
                  className="w-full border-b-2 border-black rounded text-lg leading-tight py-3 
                  px-2 mb-4 focus:outline-indigo-200"
                  value={contactMode}
                  onChange={(e) =>
                    setContactMode(e.target.value as "email" | "phone")
                  }
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
              </div>

              {contactMode === "email" && (
                <div className="mb-5 w-full max-w-md">
                  <label htmlFor="contactInfo" className="block mb-1">
                    Email
                  </label>
                  <input
                    id="contactInfo"
                    className="w-full border-b-2 border-black rounded text-lg leading-tight py-3 
                  px-2 mb-4 focus:outline-indigo-200"
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}

              {contactMode === "phone" && (
                <div className="mb-5 w-full max-w-md">
                  <label htmlFor="contactInfo" className="block mb-1">
                    Phone
                  </label>
                  <input
                    id="contactInfo"
                    className="w-full border-b-2 border-black rounded text-lg leading-tight py-3 
                    px-2 mb-4 focus:outline-indigo-200"
                    type="text"
                    placeholder="phone"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              )}

              <button className="w-full border bg-fuchsia-950 py-4 px-4
         rounded-2xl text-white font-bold text-xl" type="submit">Sign up</button>
           
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
