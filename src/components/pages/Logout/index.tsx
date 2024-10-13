import React from "react";
import { Box } from "@mui/material";
import { homePageContainer } from "./styles";
import Sidebar from "../../molecules/SideBar";

const HomePage: React.FC = () => {
  return <Box sx={homePageContainer}></Box>;
};

export default HomePage;
