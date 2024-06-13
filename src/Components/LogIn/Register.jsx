import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useAuth } from "../../Hooks/useAuth";
const Register = () => {
  // const [passMatch, setpassMatch] = useState(false);
  const { createUser } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    if (password === confirm_password) {
      createUser(email, password);
    }
    console.log(email, password, confirm_password);
  };

  return (
    <div className="card-body lg:container mx-auto lg:w-96">
      <form onSubmit={handleRegister}>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            className="input input-bordered"
            name="confirm_password"
            required
          />
        </div>
        {/* ${
              passMatch ? "btn-accent" : "btn-disabled"
            } */}
        <div className="form-control mt-6">
          <input
            className={`btn sm:btn-sm md:btn-sm lg:btn-lg  btn-accent`}
            type="submit"
            value="Register"
          />
        </div>

        <SocialLogin></SocialLogin>
        <div className="mt-6">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-red-500 font-bold underline">
              Log in Now
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
