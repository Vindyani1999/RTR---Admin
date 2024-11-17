import React, { useState } from "react";
import { Box, Grid, Typography, Fab } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuCard from "../../atoms/MenuCard";
import { menuItems as initialMenuItems } from "./mockData"; // Import initial data
import SearchBar from "../../atoms/SearchBar";
import NewMenuDialog from "../../atoms/createMenuPopup";
import { MenuCardProps } from "../../atoms/MenuCard";

const MenuItems: React.FC = () => {
  const [menuItems, setMenuItems] = useState(initialMenuItems); // State for menu items
  const [searchTerm, setSearchTerm] = useState("");
  const [openForm, setOpenForm] = useState(false);

  // Filter items based on the search term
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle saving the new menu item
  const handleSave = (item: MenuCardProps) => {
    setMenuItems((prevItems) => [...prevItems, { ...item, id: Date.now() }]); // Add new item with a unique ID
    setOpenForm(false); // Close the dialog
  };

  return (
    <>
      {/* Header Section */}
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

      {/* Menu Items Display */}
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
                handleDelete={() =>
                  setMenuItems((prevItems) =>
                    prevItems.filter((menuItem) => menuItem.id !== item.id)
                  )
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Floating Button */}
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: 35,
          right: 50,
          backgroundColor: "darkred",
          "&:hover": {
            backgroundColor: "darkorange",
          },
        }}
        onClick={() => setOpenForm(true)}
      >
        <AddCircleIcon sx={{ fontSize: 32 }} />
      </Fab>

      {/* New Menu Item Dialog */}
      <NewMenuDialog
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSave={handleSave}
      />
    </>
  );
};

export default MenuItems;
