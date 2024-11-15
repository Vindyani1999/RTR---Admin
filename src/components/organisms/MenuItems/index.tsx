import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import MenuCard from "../../atoms/MenuCard";
import { menuItems } from "./mockData";
import SearchBar from "../../atoms/SearchBar";

const MenuItems: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter menu items based on search term
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 700, ml: 3, mt: 1.5 }}>
          Menu Items
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "end",
            marginBottom: 3,
          }}
        >
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </Box>
      </Box>

      <Box sx={{ maxHeight: "610px", overflowY: "auto" }}>
        <Grid container spacing={2}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <MenuCard
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                category={
                  Array.isArray(item.category) ? item.category : [item.category]
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MenuItems;
