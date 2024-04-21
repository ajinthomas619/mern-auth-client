import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <div className="flex  w-full items-center">
      <div className=" w-full flex items-center">
        <img
          src="./public/sign-up.png"
          alt="Sign Up"
          className="cursor-pointer"
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
