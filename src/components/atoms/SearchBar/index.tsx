import React from "react";
import { TextField } from "@mui/material";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchProps> = ({ value, onChange }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      placeholder="Search..."
      value={value}
      onChange={handleSearchChange}
      variant="outlined"
      InputProps={{
        sx: {
          borderRadius: 10,
          paddingLeft: "10px",
          height: "45px",
        },
      }}
      sx={{ width: "400px" }}
    />
  );
};

export default SearchBar;
