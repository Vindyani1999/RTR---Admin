import React from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { downArrowStyle } from "./styles";

interface DownArrowProps {
  onClick: () => void;
}

const DownArrow: React.FC<DownArrowProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} sx={downArrowStyle}>
      <KeyboardArrowDownIcon
        sx={{
          color: "#000000",
          height: { xs: 10, sm: 20, md: 30, lg: 45, xl: 45 },
          width: { xs: 10, sm: 20, md: 30, lg: 45, xl: 45 },
        }}
      />
    </IconButton>
  );
};

export default DownArrow;
