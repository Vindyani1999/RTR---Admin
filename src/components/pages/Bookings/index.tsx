import React from "react";
import { Box } from "@mui/material";
import { homePageContainer } from "./styles";
import BookingsTable from "../../organisms/BookingTable";

const HomePage: React.FC = () => {
  return (
    <Box sx={homePageContainer}>
      <BookingsTable />
    </Box>
  );
};

export default HomePage;
