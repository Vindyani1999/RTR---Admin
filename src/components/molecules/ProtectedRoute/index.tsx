import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../../constants/routeConstants";

interface IAuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  token: string | null;
  user: IAuthUser | null;
}

interface IAuthUser {
  id: number;
  email: string;
  role: string;
}

interface RootState {
  auth: IAuthState;
}

interface ProtectedRouteProps {
  requiredRole?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRole }) => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const location = useLocation();

  if (!user || !isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
