import React from "react";
import { Box } from "@mui/material";
import LogoutImg from "../../../assets/icons/Logout/logout.png";
import SignUpComponent from "../../atoms/SignUpComponent/index";

const LogoutPage: React.FC = () => {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <Box>
      <SignUpComponent
        img={LogoutImg}
        message="Before logging out, please ensure you have reviewed all important tasks and saved any changes."
        buttonText="Logout"
        onclick={handleLogout}
        showFields={false} // Hide text fields for logout
      />
    </Box>
  );
};

export default LogoutPage;
