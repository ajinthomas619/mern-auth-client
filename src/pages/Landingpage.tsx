import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <div className="flex justify-between h-screen">
         <div className="flex items-center">
          
      <Link to="/sign-up">
        <img src="https://raw.githubusercontent.com/ajinthomas619/mern-auth-client/main/public/sign-up.png" alt="Sign Up" className="cursor-pointer" />
      </Link>
      </div>
      <div className="flex items-center">
      <Link to="/log-in">
        <img src="https://raw.githubusercontent.com/ajinthomas619/mern-auth-client/main/public/sign-in.png" alt="Sign In" className="cursor-pointer" />
      </Link>
      </div>
    </div>
  );
};

export default Landingpage;
