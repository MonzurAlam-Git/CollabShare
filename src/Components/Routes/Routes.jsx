import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../LogIn/Login";
import DashboardLayout from "../../Layout/DashboardLayout";
import Error from "../../Pages/Error";
import Dashboard from "../Dashboard/Dashboard";
import HomeLayout from "../../Layout/HomeLayout";
import Register from "../LogIn/Register";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../Dashboard/Profile_dashboard";
import Profile_dashboard from "../Dashboard/Profile_dashboard";
import Tasks from "../Dashboard/Tasks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoutes>
            <Profile_dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/tasks",
        element: (
          <PrivateRoutes>
            <Tasks></Tasks>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
