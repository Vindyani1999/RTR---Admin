import React from "react";
import { Box } from "@mui/material";
import Logo from "../../../assets/icons/Logo/logo.png";
import SignUpComponent from "../../atoms/SignUpComponent";

const LoginPage: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log("Logging in with:", email, password);
    // Add login logic here, such as API call or form validation.
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
