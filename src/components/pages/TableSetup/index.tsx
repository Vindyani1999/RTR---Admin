import React from "react";
import { Box } from "@mui/material";
import { homePageContainer } from "./styles";
import { TableSetup } from "../../organisms/TableSetup";

const HomePage: React.FC = () => {
  return (
    <Box sx={homePageContainer}>
      <TableSetup />
    </Box>
  );
};

export default HomePage;
