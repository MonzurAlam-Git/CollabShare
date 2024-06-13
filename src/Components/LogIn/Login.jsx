import { useContext } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../Shared/AuthProvider";
const Login = () => {
  // const [register, setRegister] = useState(false);
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login();
  };

  return (
    <div className="card-body lg:container mx-auto lg:w-96">
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
        </div>

        <div className="form-control mt-6">
          <input
            className="btn bg-red-500 text-white"
            type="submit"
            value="Login"
          />
        </div>
        <SocialLogin></SocialLogin>
        <div className="mt-6">
          <p>
            New here?{" "}
            <Link to="/register" className="text-red-500">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
