// AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants";
//import MainContainer from "../components/organisms/MainContainer";
import Bookings from "../components/pages/Bookings";

import MenuItems from "../components/pages/MenuItems";
import History from "../components/pages/History";
// import TableSetup from "../components/pages/TableSetup";
import HomePage from "../components/pages/HomePage";
import LogoutPage from "../components/pages/Logout";
import LoginPage from "../components/pages/LogIn";
import NewAdminPage from "../components/pages/NewAdmin";
import AllAdminsPage from "../components/pages/History copy";
// import { AuthProvider } from "../context/AuthContext"; // Adjust the import path
import ProtectedRoute from "../components/molecules/ProtectedRoute"; // Adjust the import path

const AppRouter: React.FC = () => {
  return (
    // <AuthProvider>
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.HOME} element={<HomePage />}>
            <Route index element={<Bookings />} />
            <Route path={ROUTES.MENU} element={<MenuItems />} />
            <Route path={ROUTES.HISTORY} element={<History />} />
            {/* <Route path={ROUTES.TABLES} element={<TableSetup />} /> */}
            <Route path={ROUTES.CREATE_ADMIN} element={<NewAdminPage />} />
            <Route path={ROUTES.ADMINS} element={<AllAdminsPage />} />
            <Route path={ROUTES.LOGOUT} element={<LogoutPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
    // </AuthProvider>
  );
};

export default AppRouter;
