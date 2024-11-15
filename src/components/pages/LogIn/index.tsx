import React from "react";
import { Box } from "@mui/material";
import Logo from "../../../assets/icons/Logo/logo.png";
import LoginForm from "../../organisms/LoginForm";
import { AppDispatch, RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routeConstants";
import { userLogin } from "../../../redux/action/authAction";

import { useDispatch, useSelector } from "react-redux";

const LoginPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const handleLogin = (email: string, password: string) => {
    dispatch(userLogin({ email, password }));
    console.log("Logging in with:", email, password);
  };

  if (isAuthenticated) {
    navigate(ROUTES.HOME);
  }

  return (
    <Box sx={{ textAlign: "center", pt: 4 }}>
      <img src={Logo} alt="logo" style={{ width: 200, marginBottom: 16 }} />
      <LoginForm onLogin={handleLogin} />
      {/* {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )} */}
    </Box>
  );
};

export default LoginPage;
