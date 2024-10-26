import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import CustomButton from "../../atoms/CustomButton";
import { homePageContainer } from "./styles";

interface SignUpComponentProps {
  img: string;
  message?: string;
  buttonText: string;
  showFields: boolean;
  onclick: (email: string, password: string) => void;
}

const SignUpComponent = ({
  img,
  message,
  buttonText,
  showFields,
  onclick,
}: SignUpComponentProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onclick(email, password);
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
          <img
            src={img}
            alt="logout"
            style={{
              height: buttonText === "Login" ? 80 : 100,
              width: buttonText === "Login" ? 250 : 100,
            }}
          />
        </Box>

        {message && (
          <Typography variant="h4" sx={{ fontSize: 16 }}>
            {message}
          </Typography>
        )}

        {showFields && (
          <>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ mt: 1 }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </>
        )}

        <CustomButton label={buttonText} onClick={handleSubmit} />
      </Box>
    </Box>
  );
};

export default SignUpComponent;
