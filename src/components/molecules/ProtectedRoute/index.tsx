import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../../constants/routeConstants";

interface IAuthState {
  isAuthenticated: boolean;
  user: IAuthUser | null;
}

interface IAuthUser {
  id: number;
  email: string;
}

interface RootState {
  auth: IAuthState;
}

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
