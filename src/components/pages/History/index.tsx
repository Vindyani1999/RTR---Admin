import React from "react";
import { Box } from "@mui/material";
import { homePageContainer } from "./styles";
import HistoryTable from "../../organisms/HistoryTable";

const HomePage: React.FC = () => {
  return (
    <Box sx={homePageContainer}>
      <HistoryTable />
    </Box>
  );
};

export default HomePage;
