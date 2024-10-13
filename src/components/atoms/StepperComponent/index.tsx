import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepIconProps,
  styled,
} from "@mui/material";
import { stepperContainer, stepLabel, stepIcon } from "./styles";

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed, icon } = props;

  return (
    <Box
      sx={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: completed ? "#4caf50" : active ? "#f57c00" : "#e0e0e0",
        color: "white",
        fontSize: 20,
      }}
    >
      {completed ? (
        "✓"
      ) : active ? (
        <Box sx={{ fontSize: 20 }}>{icon}</Box>
      ) : (
        icon
      )}
    </Box>
  );
};

const StyledStepper = styled(Stepper)(({ theme }) => ({
  ".MuiStepLabel-root": stepLabel,
  ".MuiStepIcon-root": stepIcon,
}));

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  steps,
}) => {
  return (
    <Box sx={stepperContainer}>
      <StyledStepper activeStep={currentStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </StyledStepper>
    </Box>
  );
};

export default StepIndicator;
