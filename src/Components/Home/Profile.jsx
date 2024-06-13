import { useAuth } from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const { photoURL } = user;
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <div className="dropdown dropdown-bottom  dropdown-hover">
      <div tabIndex={0} role="button" className=" m-1">
        <div className="avatar online">
          <div className="w-8 lg:w-10 rounded-full">
            <img src={photoURL} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="text-red-600 font-extrabold "
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
