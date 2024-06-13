import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useAuth } from "../../Hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  return (
    <div className="navbar bg-base-100 font-bold mx-auto container ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Projects</Link>
            </li>
            <li>
              <Link>Parent</Link>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost lg:text-xl ">CollabSphere</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* Dashboard precisely will nested here  */}
          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li> */}
          <li>
            <Link href="/support">Support </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-4">
        {user ? (
          <Profile></Profile>
        ) : (
          <Link
            className="font-semibold  hover:text-blue-700 hover:font-bold"
            to="/login"
          >
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
