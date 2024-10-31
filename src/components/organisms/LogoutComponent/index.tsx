import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../../atoms/CustomButton";
import { homePageContainer } from "./styles";
import LogoutImg from "../../../assets/icons/Logout/logout.png";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { logout } from "../../../redux/action/authAction";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routeConstants";

const LogoutComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logout()); // Dispatch the logout action
    navigate(ROUTES.LOGIN); // Redirect to logout route or home after logging out
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <Box sx={homePageContainer}>
        <Box sx={{ textAlign: "center" }}>
          <img src={LogoutImg} alt="logout" />
        </Box>

        <Typography variant="h4" sx={{ fontSize: 16 }}>
          Before logging out, please ensure you have reviewed all important
          tasks and saved any changes.
        </Typography>

        <CustomButton label="Logout" onClick={handleLogout} />
      </Box>
    </Box>
  );
};

export default LogoutComponent;
