import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../../molecules/SideBar";
import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Box display="flex">
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Outlet /> {/* This is where nested routes will render */}
      </Box>
    </Box>
  );
};

export default HomePage;
