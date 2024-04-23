import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  var d1 = new Date()
  d1.toUTCString()
  Math.floor(d1.getTime()/1000)
  var d2 = new Date( d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds() );
  d2.toUTCString()
  Math.floor(d2.getTime( )/1000)
  
  console.log("timezone 1",d1)
  console.log("timezone 2",d2)
  return (
    <div className="flex  w-full items-center">
      <div className=" w-full flex items-center">
        <img
          src="https://raw.githubusercontent.com/ajinthomas619/mern-auth-client/main/public/sign-up.png"
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
