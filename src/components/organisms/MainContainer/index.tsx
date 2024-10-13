import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { mainContainer } from "./styles";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <Box sx={mainContainer}>{children}</Box>;
};

export default MainContainer;
