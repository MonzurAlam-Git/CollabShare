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
    <div>
      <div className="divider w-96 mx-auto font-bold">OR</div>
      {/* Google Sign In  */}
      <div className="grid items-center justify-center gap-2 lg:flex flex-wrap">
        <button
          onClick={handleGoogle}
          className="btn btn-outline  bg-emerald-500 hover:bg-emerald-700 text-white w-80 font-bold "
        >
          <FcGoogle className="w-10 h-6"></FcGoogle> Google Sign In
        </button>
        {/* Github Login  */}
        <button
          onClick={handleGithub}
          className="btn btn-outline  bg-emerald-500 hover:bg-emerald-700 text-white w-80 font-bold "
        >
          <FaGithub className="w-10 h-6"></FaGithub>GitHub Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
