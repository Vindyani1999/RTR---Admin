import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { Box } from "@mui/material";

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <Box
      sx={{
        padding: "3px",
        background: "linear-gradient(45deg, orange, darkred)",
        borderRadius: "10px",
        display: "inline-block",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        <Button
          sx={{
            paddingX: 2,
            paddingY: 0.5,
            color: "black",
            fontFamily: "Raleway, sans-serif ",
            fontWeight: "bold",
            textTransform: "none",
            fontSize: 16,
          }}
          {...props}
        >
          {label}
        </Button>
      </Box>
    </Box>
  );
};

export default CustomButton;
