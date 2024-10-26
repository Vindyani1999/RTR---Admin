import React from "react";
import { Box } from "@mui/material";
import { homePageContainer } from "./styles";
import AdminsTable from "../../organisms/AdminTable";

const AllAdminPage: React.FC = () => {
  return (
    <Box sx={homePageContainer}>
      <AdminsTable />
    </Box>
  );
};

export default AllAdminPage;
