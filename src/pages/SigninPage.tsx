import LoginForm from "../components/SigninForm"

const SigninPage = () => {
  return (
    <div className="flex  w-full items-center">
    <div className=" w-full flex items-center">
      <img
        src="https://raw.githubusercontent.com/ajinthomas619/mern-auth-client/main/public/sign-in.png"
        alt="Sign In"
        className="cursor-pointer"
      />
    </div>
    <div className="w-full flex justify-center items-center">
      <LoginForm />
    </div>
  </div>
  )
}

export default SigninPage