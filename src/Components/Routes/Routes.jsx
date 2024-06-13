import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../LogIn/Login";
import DashboardLayout from "../../Layout/DashboardLayout";
import Error from "../../Pages/Error";
import Dashboard from "../Dashboard/Dashboard";
import HomeLayout from "../../Layout/HomeLayout";
import Register from "../LogIn/Register";

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
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
