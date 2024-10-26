import { SxProps, Theme } from "@mui/material";

import { keyframes } from "@mui/system";

export const slideIn = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const mainContainer: SxProps<Theme> = {
  display: "flex",
  height: "90vh",
  mb: -5,
  mt: 2,
  alignItems: "center",
  //backgroundColor: "#000000",
  transform: "scale(0.95)",
  width: "400px",
};

export const tableBox: SxProps<Theme> = {
  display: "flex",
  textAlign: "center",
  backgroundColor: "transparent",
  transform: "scale(1)",
};
