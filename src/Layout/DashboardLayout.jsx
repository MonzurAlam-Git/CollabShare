import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-teal-600 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link
              className="font-bold text-black hover:text-white"
              to="/dashboard/profile"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="font-bold text-black hover:text-white"
              to="/dashboard/tasks"
            >
              Tasks
            </Link>
          </li>
          <li>
            <Link className="font-bold text-black hover:text-white" to="/">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
