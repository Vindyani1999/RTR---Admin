import React from "react";
import { Box } from "@mui/material";
import { homePageContainer } from "./styles";
import MenuItems from "../../organisms/MenuItems";

const MenuItemPage: React.FC = () => {
  return (
    <Box sx={homePageContainer}>
      <MenuItems />
    </Box>
  );
};

export default MenuItemPage;
