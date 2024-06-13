import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../Hooks/useAuth";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useAuth();
  const handleGoogle = () => {
    return googleLogin();
  };
  const handleGithub = () => {
    return githubLogin();
  };
  return (
    <div className="grid grid-cols-1 place-items-center	 mx-auto  ">
      <div className="divider w-96 font-bold ">OR</div>
      {/* Google Sign In  */}
      <div className="flex gap-2 items-center">
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
