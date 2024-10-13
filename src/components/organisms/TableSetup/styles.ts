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
  height: "100vh",
  borderRadius: "12px",
  boxShadow: "0px 0px 15px 0px #000000",
  width: "74%",
  mb: -5,
  mt: 2,
  justifyContent: "flex-end",
  alignItems: "center",
  //backgroundColor: "#000000",
};

export const tableBox: SxProps<Theme> = {
  display: "flex",
  textAlign: "center",
  backgroundColor: "transparent",
};
