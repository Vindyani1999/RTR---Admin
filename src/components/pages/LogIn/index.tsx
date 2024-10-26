import React from "react";
import { Box } from "@mui/material";
import Logo from "../../../assets/icons/Logo/logo.png";
import SignUpComponent from "../../atoms/SignUpComponent";
import { useAuth } from "../../../context/AuthContext";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const handleLogin = (email: string, password: string) => {
    console.log("Logging in with:", email, password);
    login();
  };

  return (
    <Box>
      <SignUpComponent
        img={Logo}
        buttonText="Login"
        onclick={handleLogin}
        showFields={true} // Show text fields for login
      />
    </Box>
  );
};

export default LoginPage;
