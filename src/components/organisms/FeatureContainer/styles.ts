import { SxProps } from "@mui/material";

export const featureContainerStyle: SxProps = {
  mt: 1,
  mb: 1,
};

export const animationStyles = {
  hiddenLeft: {
    opacity: 0,
    transform: "translateX(-50%)", // Start from the left
    transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
  },
  hiddenRight: {
    opacity: 0,
    transform: "translateX(50%)", // Start from the right
    transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
  },
  visible: {
    opacity: 1,
    transform: "translateX(0)", // Normal position
    transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
  },
};
