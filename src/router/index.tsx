import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants";
import MainContainer from "../components/organisms/MainContainer";
import Bookings from "../components/pages/Bookings";
import { ThemeProvider } from "@emotion/react";
import { themeAdmin } from "../theme/theme";
import MenuItems from "../components/pages/MenuItems";
import History from "../components/pages/History";
import TableSetup from "../components/pages/TableSetup";
import HomePage from "../components/pages/HomePage";
import LogoutPage from "../components/pages/Logout";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={themeAdmin}>
        <MainContainer>
          <Routes>
            <Route element={<HomePage />}>
              {/* Remove the leading slash from the child paths */}
              <Route path={ROUTES.BOOKINGS} element={<Bookings />} />
              <Route path={ROUTES.MENU} element={<MenuItems />} />
              <Route path={ROUTES.HISTORY} element={<History />} />
              <Route path={ROUTES.TABLES} element={<TableSetup />} />
              <Route path={ROUTES.LOGOUT} element={<LogoutPage />} />
            </Route>
          </Routes>
        </MainContainer>
      </ThemeProvider>
    </Router>
  );
};

export default AppRouter;
