import { SxProps, Theme } from "@mui/material/styles";

export const stepperContainer: SxProps<Theme> = {
  width: "100%",
  paddingBottom: "24px",
  backgroundColor: "transparent",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  mb: 4,
};

export const stepLabel: SxProps<Theme> = {
  fontSize: "20px",
  fontWeight: 500,
  color: "#333",
};

export const stepIcon: SxProps<Theme> = {
  color: "#1976d2", // Blue color for the active step
  "&.MuiStepIcon-active": {
    color: "#f57c00", // Orange color for the active step
  },
  "&.MuiStepIcon-completed": {
    color: "#4caf50", // Green color for completed steps
  },
};

export const stepConnector: SxProps<Theme> = {
  "& .MuiStepLabel-root": stepLabel,
  "& .MuiStepIcon-root": stepIcon,
};

export const PersonalDetailsSubmitButtonStyle = {
  display: "flex",
  justifyContent: "center",
  mt: 3,
};
