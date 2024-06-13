import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";
import Loading from "../../Shared/Loading";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useAuth();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoutes;
