// atoms/GradientButton/index.tsx
import React from "react";
import { GradientButtonStyled } from "./style";
import { ButtonProps } from "@mui/material/Button";

interface GradientButtonProps extends ButtonProps {
  label: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ label, ...props }) => {
  return <GradientButtonStyled {...props}>{label}</GradientButtonStyled>;
};

export default GradientButton;
