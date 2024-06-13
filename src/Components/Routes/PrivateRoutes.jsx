import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import Loading from "../../Shared/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  // return <Navigate to={"/login"} state={{ from: location }} replace />;
  return (
    <Navigate to={"/dashboard/tasks"} state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
