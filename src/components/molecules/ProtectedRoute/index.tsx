import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" />; // Adjust the path according to your ROUTES constant
  }

  return <Outlet />; // Render the child routes if authenticated
};

export default ProtectedRoute;
