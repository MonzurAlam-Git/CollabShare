import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const handleGoogle = () => {
    console.log("google Log In");
  };
  const handleGithub = () => {
    console.log("Github Log In");
  };
  return (
    <div className=" grid  justify-items-center">
      <div className="divider w-96 mx-auto font-bold">OR</div>
      {/* Google Sign In  */}
      <div className="flex flex-wrap w-auto gap-2  ">
        <button
          onClick={handleGoogle}
          className="btn btn-accent text-white  font-bold "
        >
          <FcGoogle className="w-10 h-6"></FcGoogle>
        </button>
        {/* Github Login  */}
        <button
          onClick={handleGithub}
          className="btn btn-accent text-white  font-bold "
        >
          <FaGithub className="w-10 h-6"></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
