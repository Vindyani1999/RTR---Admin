import React from "react";
import { Box, Snackbar } from "@mui/material";
import Logo from "../../../assets/icons/Logo/logo.png";
import SignUpComponent from "../../atoms/SignUpComponent";
import { AppDispatch, RootState } from "../../../redux/store";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routeConstants";
import { userLogin } from "../../../redux/actions/authAction"; // Import your login action
import { useDispatch, useSelector } from "react-redux";

const LoginPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector(
    (state: RootState) => state.auth
  );

  // Handle login by dispatching the userLogin action
  const handleLogin = (email: string, password: string) => {
    console.log("Logging in with:", email, password);
    dispatch(userLogin({ email, password })); // Dispatch the login action with credentials
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate(ROUTES.HOME);
    }
  }, [isAuthenticated, navigate]);

  // Optional: For displaying error messages
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  React.useEffect(() => {
    if (error) {
      setOpenSnackbar(true); // Show snackbar if there is an error
    }
  }, [error]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      <SignUpComponent
        img={Logo}
        buttonText="Login"
        onclick={handleLogin} // Pass the handleLogin function
        showFields={true} // Show text fields for login
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={error} // Display the error message from Redux state
      />
    </Box>
  );
};

export default LoginPage;
